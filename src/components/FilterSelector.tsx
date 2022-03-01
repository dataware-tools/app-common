import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useTheme } from "@mui/material/styles";
import React, { useState, useRef } from "react";

export type Filter = {
  label: string;
  key: string;
  number?: number;
};
export type FilterSelectorPresentationProps = {
  onClickFilter: (filter: Filter) => void | Promise<void>;
  onClearFilter: (group?: string[]) => void | Promise<void>;
  open: boolean;
  groupOpens: Record<string, boolean>;
  onClickHeader: (groupName?: string) => void;
} & Omit<FilterSelectorProps, "onChange">;

export type FilterSelectorProps = {
  filter: Filter[];
  groups?: Record<string, string[]>;
  selectedValues: string[];
  header?: string;
  onChange: (selectedValues: string[]) => Promise<void> | void;
  disableCollapse?: boolean;
  defaultOpen?: boolean;
};

const genTextForShowingNumOfSelectedValues = (
  arr: string[],
  group?: string[]
) => {
  if (group) {
    const filteredArr = Array.isArray(arr)
      ? arr.filter((value) => group.includes(value))
      : [];
    return filteredArr.length > 0 ? ` (${filteredArr.length})` : "";
  } else {
    return Array.isArray(arr) && arr.length > 0 ? ` (${arr.length})` : "";
  }
};

const Header = ({
  text,
  open,
  onClick,
  nested,
}: {
  text: string;
  open?: boolean;
  onClick: () => void;
  nested?: boolean;
}) => {
  const selfRef = useRef<HTMLDivElement>(null);
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "common.white",
        ...(nested ? { pl: 4 } : {}),
        zIndex: 1,
        ":hover": { backgroundColor: "hoveredWhite" },
      }}
      ref={selfRef}
    >
      <ListItemText primary={text} />
      {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
    </ListItemButton>
  );
};

const ValueList = ({
  values,
  selectedValues,
  onClickValue,
}: {
  values: Filter[];
  selectedValues: string[];
  onClickValue: (filter: Filter) => void | Promise<void>;
}) => (
  <List disablePadding>
    {values.map((value) => {
      const isSelected = selectedValues.indexOf(value.key) !== -1;
      return (
        <ListItem
          key={value.key}
          disablePadding
          secondaryAction={value.number ? `(${value.number})` : undefined}
        >
          <ListItemButton
            onClick={() => onClickValue(value)}
            dense
            sx={{ pl: 4 }}
          >
            <ListItemIcon>
              <Checkbox edge="start" checked={isSelected} disableRipple />
            </ListItemIcon>
            <ListItemText primary={value.label} />
          </ListItemButton>
        </ListItem>
      );
    })}
  </List>
);

export const FilterSelectorPresentation = ({
  filter,
  groups,
  selectedValues,
  header,
  onClickFilter,
  onClearFilter,
  open,
  groupOpens,
  onClickHeader,
  disableCollapse,
}: FilterSelectorPresentationProps): JSX.Element | null => {
  const theme = useTheme();

  return filter.length > 0 ? (
    <>
      {header ? (
        <Header
          onClick={() => onClickHeader()}
          text={`${header}${genTextForShowingNumOfSelectedValues(
            selectedValues
          )}`}
          open={disableCollapse ? undefined : open}
        />
      ) : null}
      <Collapse in={!header || disableCollapse || open}>
        <Box textAlign="end" pt={1} pr={2}>
          <Button onClick={async () => await onClearFilter()} variant="text">
            クリア
          </Button>
        </Box>
        <ValueList
          values={filter.filter(({ key }) =>
            groups
              ? !Object.values(groups).some((group) => group.includes(key))
              : true
          )}
          onClickValue={onClickFilter}
          selectedValues={selectedValues}
        />
        <List disablePadding>
          {groups
            ? Object.entries(groups).map(([groupName, group]) => (
                <span key={groupName}>
                  <Header
                    nested
                    onClick={() => onClickHeader(groupName)}
                    text={`${groupName}${genTextForShowingNumOfSelectedValues(
                      selectedValues,
                      group
                    )}`}
                    open={disableCollapse ? undefined : groupOpens[groupName]}
                  />
                  <Collapse
                    in={disableCollapse || groupOpens[groupName]}
                    sx={{
                      borderLeft: `2px solid ${theme.palette.divider}`,
                      ml: 4,
                    }}
                  >
                    <Box textAlign="end" pr={2}>
                      <Button
                        onClick={async () => await onClearFilter(group)}
                        variant="text"
                        size="small"
                      >
                        クリア
                      </Button>
                    </Box>
                    <ValueList
                      onClickValue={onClickFilter}
                      values={filter.filter(({ key }) => group.includes(key))}
                      selectedValues={selectedValues}
                    />
                  </Collapse>
                </span>
              ))
            : null}
        </List>
      </Collapse>
    </>
  ) : null;
};

export const FilterSelector = ({
  selectedValues,
  onChange,
  disableCollapse,
  groups,
  defaultOpen,
  ...delegated
}: FilterSelectorProps): JSX.Element => {
  const initOpen = Boolean(disableCollapse || defaultOpen);
  const [open, setOpen] = useState(initOpen);
  const initGroupOpens = {};
  for (const groupName of Object.keys(groups ?? {})) {
    initGroupOpens[groupName] = initOpen;
  }
  const [groupOpens, setGroupOpens] = useState(initGroupOpens);
  const onClickFilter: FilterSelectorPresentationProps["onClickFilter"] =
    async (filter) => {
      const index = selectedValues.indexOf(filter.key);
      const isSelected = selectedValues.indexOf(filter.key) !== -1;
      const newSelectedValues = [...selectedValues];
      isSelected
        ? newSelectedValues.splice(index, 1)
        : newSelectedValues.push(filter.key);

      await onChange(newSelectedValues);
    };
  const onClearFilter: FilterSelectorPresentationProps["onClearFilter"] =
    async (group) => {
      if (group) {
        await onChange(
          selectedValues.filter((value) => !group.includes(value))
        );
      } else {
        await onChange([]);
      }
    };

  const onClickHeader: FilterSelectorPresentationProps["onClickHeader"] = (
    groupName
  ) => {
    if (groupName) {
      setGroupOpens((prev) => ({ ...prev, [groupName]: !prev[groupName] }));
    } else {
      setOpen(!open);
    }
  };

  return (
    <FilterSelectorPresentation
      {...delegated}
      selectedValues={selectedValues}
      onClickFilter={onClickFilter}
      onClearFilter={onClearFilter}
      open={open}
      onClickHeader={onClickHeader}
      disableCollapse={disableCollapse}
      groups={groups}
      groupOpens={groupOpens}
    />
  );
};
