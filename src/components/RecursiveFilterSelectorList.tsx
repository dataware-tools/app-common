import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import {
  RecursiveFilterSelectorProps,
  RecursiveFilterSelector,
  RecursiveFilterSelectorPresentationProps,
} from "./RecursiveFilterSelector";

export type FilterList = {
  label: string;
  key: string;
  number?: number;
  children: RecursiveFilterSelectorProps["filters"];
}[];
type SelectedValues = {
  [key: string]: RecursiveFilterSelectorProps["selectedValues"];
};
export type RecursiveFilterSelectorListPresentationProps = {
  onClear: (key?: string) => void | Promise<void>;
  onClickHeader: (childIndex: number) => void;
  childOpens: boolean[];
} & RecursiveFilterSelectorListProps;
export type RecursiveFilterSelectorListProps = {
  filters: FilterList;
  onChange: (filters: SelectedValues) => Promise<void> | void;
  selectedValues: SelectedValues;
};

export const RecursiveFilterSelectorListPresentation = ({
  filters,
  onChange,
  onClear,
  onClickHeader,
  childOpens,
  selectedValues,
}: RecursiveFilterSelectorListPresentationProps): JSX.Element | null => {
  return filters.length > 0 ? (
    <>
      <Box textAlign="end" pt={1} pr={2}>
        <Button onClick={() => onClear()} variant="text">
          クリア
        </Button>
      </Box>
      <List>
        {filters.map((filter, index) => (
          <div key={index}>
            <ListItem
              disablePadding
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "common.white",
                zIndex: 1,
                ":hover": { backgroundColor: "hoveredWhite" },
                height: "42px",
              }}
            >
              <ListItemButton dense onClick={() => onClickHeader(index)}>
                <ListItemText
                  primary={
                    selectedValues[filter.key] &&
                    selectedValues[filter.key].length > 0
                      ? `${filter.label} (${selectedValues[filter.key].length})`
                      : `${filter.label}`
                  }
                />
                {childOpens[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse
              in={childOpens[index]}
              sx={{
                ml: 2,
              }}
            >
              <Box textAlign="end" pr={2}>
                <Button
                  onClick={() => onClear(filter.key)}
                  variant="text"
                  size="small"
                >
                  クリア
                </Button>
              </Box>
              <RecursiveFilterSelector
                filters={filter.children}
                selectedValues={selectedValues[filter.key] || []}
                onChange={async (newSelectedValues) =>
                  await onChange({
                    ...selectedValues,
                    [filter.key]: newSelectedValues,
                  })
                }
              />
            </Collapse>
          </div>
        ))}
      </List>
    </>
  ) : null;
};

export const RecursiveFilterSelectorList = ({
  filters,
  onChange,
  selectedValues,
  ...delegated
}: RecursiveFilterSelectorListProps): JSX.Element => {
  const onClear = async (key?: string) => {
    const selectedValuesAfterClear = { ...selectedValues };
    if (key) {
      selectedValuesAfterClear[key] = [];
    } else {
      for (const { key } of filters) {
        selectedValuesAfterClear[key] = [];
      }
    }
    onChange(selectedValuesAfterClear);
  };
  const [childOpens, setChildOpens] = useState<boolean[]>(
    filters.map(() => {
      return false;
    })
  );
  const onClickHeader: RecursiveFilterSelectorPresentationProps["onClickHeader"] =
    (childIndex) => {
      setChildOpens((prev) => {
        const newState = [...prev];
        newState[childIndex] = !prev[childIndex];
        return newState;
      });
    };
  return (
    <RecursiveFilterSelectorListPresentation
      {...delegated}
      filters={filters}
      selectedValues={selectedValues}
      onClear={onClear}
      onChange={onChange}
      onClickHeader={onClickHeader}
      childOpens={childOpens}
    />
  );
};
