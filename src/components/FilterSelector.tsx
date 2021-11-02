import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import React, { useState } from "react";

export type Filter = {
  label: string;
  key: string;
  number?: number;
};
export type FilterSelectorPresentationProps = {
  onClickFilter: (filter: Filter) => void;
  open: boolean;
  onClickHeader: () => void;
} & Omit<FilterSelectorProps, "onChange">;

export type FilterSelectorProps = {
  filter: Filter[];
  selectedValues: string[];
  header: string;
  onChange: (selectedValues: string[]) => Promise<void> | void;
  disableCollapse?: boolean;
};

export const FilterSelectorPresentation = ({
  filter,
  selectedValues,
  header,
  onClickFilter,
  open,
  onClickHeader,
  disableCollapse,
}: FilterSelectorPresentationProps): JSX.Element => {
  return (
    <>
      <ListItemButton onClick={onClickHeader}>
        <ListItemText primary={header} />
        {disableCollapse ? null : open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={disableCollapse || open}>
        <List>
          {filter.map((filter) => {
            const isSelected = selectedValues.indexOf(filter.key) !== -1;
            return (
              <ListItem
                key={filter.key}
                disablePadding
                secondaryAction={
                  filter.number ? `(${filter.number})` : undefined
                }
              >
                <ListItemButton
                  onClick={() => onClickFilter(filter)}
                  dense
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <Checkbox edge="start" checked={isSelected} disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={filter.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export const FilterSelector = ({
  selectedValues,
  onChange,
  disableCollapse,
  ...delegated
}: FilterSelectorProps): JSX.Element => {
  const [open, setOpen] = useState(Boolean(disableCollapse));
  const onClickFilter: FilterSelectorPresentationProps["onClickFilter"] = (
    filter
  ) => {
    const index = selectedValues.indexOf(filter.key);
    const isSelected = selectedValues.indexOf(filter.key) !== -1;
    const newSelectedValues = [...selectedValues];
    isSelected
      ? newSelectedValues.splice(index, 1)
      : newSelectedValues.push(filter.key);

    onChange(newSelectedValues);
  };

  const onClickHeader = () => setOpen(!open);

  return (
    <FilterSelectorPresentation
      {...delegated}
      selectedValues={selectedValues}
      onClickFilter={onClickFilter}
      open={open}
      onClickHeader={onClickHeader}
      disableCollapse={disableCollapse}
    />
  );
};
