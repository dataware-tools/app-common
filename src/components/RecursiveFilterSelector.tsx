import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";

export type Filter = {
  label: string;
  key?: string;
  number?: number;
  children?: Filter[];
};
export type RecursiveFilterSelectorPresentationProps = {
  onClickFilter: (
    filter: Filter,
    isSelected?: boolean,
    isIndeterminate?: boolean
  ) => void | Promise<void>;
  childOpens: boolean[];
  onClickHeader: (childIndex: number) => void;
} & RecursiveFilterSelectorProps;

export type RecursiveFilterSelectorProps = {
  filters: Filter[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => Promise<void> | void;
  disableCollapse?: boolean;
};

const getKeysInFilter = (filter: Filter): string[] => {
  const keys = [];
  if (filter.children) {
    const childKeys: string[] = [];
    filter.children.forEach((child) => {
      childKeys.push(...getKeysInFilter(child));
    }, childKeys);
    keys.push(...childKeys);
  } else {
    filter.key && keys.push(filter.key);
  }
  return keys;
};

export const RecursiveFilterSelectorPresentation = ({
  filters,
  selectedValues,
  onClickFilter,
  childOpens,
  onClickHeader,
  onChange,
  disableCollapse,
}: RecursiveFilterSelectorPresentationProps): JSX.Element | null => {
  const theme = useTheme();

  return filters.length > 0 ? (
    <>
      <List disablePadding>
        {filters.map((filter, index) => {
          const selectedKeySet = new Set(
            getKeysInFilter(filter).map((key) => selectedValues.includes(key))
          );
          const isSelected =
            selectedKeySet.size === 1 && selectedKeySet.has(true);
          const isIndeterminate = selectedKeySet.size !== 1;
          return filter.children ? (
            <div key={filter.key || index}>
              <ListItem
                disablePadding
                secondaryAction={
                  filter.number ? `(${filter.number})` : undefined
                }
                role="treeitem"
                sx={
                  childOpens[index]
                    ? {
                        position: "sticky",
                        top: 0,
                        backgroundColor: "common.white",
                        zIndex: 1,
                      }
                    : undefined
                }
              >
                <ListItemIcon>
                  <Checkbox
                    checked={isSelected}
                    indeterminate={isIndeterminate}
                    onChange={() => {
                      onClickFilter(filter, isSelected, isIndeterminate);
                    }}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemButton
                  onClick={() => onClickHeader(index)}
                  sx={{ pr: 2, pl: 0 }}
                >
                  <ListItemText primary={filter.label} />
                  {disableCollapse ? null : childOpens[index] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse
                in={disableCollapse || childOpens[index]}
                sx={{
                  borderLeft: `2px solid ${theme.palette.divider}`,
                  ml: "5%",
                }}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
                <RecursiveFilterSelector
                  filters={filter.children}
                  selectedValues={selectedValues}
                  onChange={onChange}
                  disableCollapse={disableCollapse}
                />
              </Collapse>
            </div>
          ) : (
            <ListItem
              disablePadding
              secondaryAction={filter.number ? `(${filter.number})` : undefined}
              role="listitem"
              key={filter.key || index}
            >
              <ListItemButton
                onClick={() => onClickFilter(filter)}
                sx={{ padding: 0 }}
              >
                <ListItemIcon>
                  <Checkbox checked={isSelected} disableRipple />
                </ListItemIcon>
                <ListItemText primary={filter.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  ) : null;
};

export const RecursiveFilterSelector = ({
  filters,
  selectedValues,
  onChange,
  disableCollapse,
  ...delegated
}: RecursiveFilterSelectorProps): JSX.Element => {
  const [childOpens, setChildOpens] = useState<boolean[]>(
    filters.map(() => {
      return false;
    })
  );

  const onClickFilter: RecursiveFilterSelectorPresentationProps["onClickFilter"] =
    async (filter, isSelected, isIndeterminate) => {
      const newSelectedValues = new Set([...selectedValues]);
      const keys = getKeysInFilter(filter);

      const shouldBeAdded =
        isSelected != null && isIndeterminate != null
          ? isIndeterminate
            ? false
            : !isSelected
          : filter.key
          ? !selectedValues.includes(filter.key)
          : false;

      for (const key of keys) {
        if (!key) {
          continue;
        }
        shouldBeAdded
          ? newSelectedValues.add(key)
          : newSelectedValues.delete(key);
      }

      await onChange([...newSelectedValues]);
    };

  const onClickHeader: RecursiveFilterSelectorPresentationProps["onClickHeader"] =
    (childIndex) => {
      setChildOpens((prev) => {
        const newState = [...prev];
        newState[childIndex] = !prev[childIndex];
        return newState;
      });
    };

  return (
    <RecursiveFilterSelectorPresentation
      {...delegated}
      filters={filters}
      selectedValues={selectedValues}
      onClickFilter={onClickFilter}
      onChange={onChange}
      childOpens={childOpens}
      onClickHeader={onClickHeader}
      disableCollapse={disableCollapse}
    />
  );
};
