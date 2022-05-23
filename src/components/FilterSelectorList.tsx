import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import React from "react";
import { FilterSelectorProps, FilterSelector } from "./FilterSelector";

export type FilterList = {
  label: string;
  key: string;
  filter: FilterSelectorProps["filter"];
  groups?: FilterSelectorProps["groups"];
}[];
type SelectedValues = { [key: string]: FilterSelectorProps["selectedValues"] };
export type FilterSelectorListPresentationProps = {
  onClear: () => void | Promise<void>;
} & FilterSelectorListProps;
export type FilterSelectorListProps = {
  filters: FilterList;
  onChange: (filters: SelectedValues) => Promise<void> | void;
  selectedValues: SelectedValues;
};

export const FilterSelectorListPresentation = ({
  filters,
  onChange,
  onClear,
  selectedValues,
}: FilterSelectorListPresentationProps): JSX.Element | null => {
  return filters.length > 0 ? (
    <>
      <Box textAlign="end" pt={1} pr={2}>
        <Button onClick={onClear} variant="text">
          クリア
        </Button>
      </Box>
      <List>
        {filters.map((elem) => (
          <FilterSelector
            key={elem.key}
            header={elem.label}
            filter={elem.filter}
            groups={elem.groups}
            onChange={async (newSelectedValues) =>
              await onChange({
                ...selectedValues,
                [elem.key]: newSelectedValues,
              })
            }
            selectedValues={selectedValues[elem.key] ?? []}
          />
        ))}
      </List>
    </>
  ) : null;
};

export const FilterSelectorList = ({
  filters,
  onChange,
  ...delegated
}: FilterSelectorListProps): JSX.Element => {
  const onClear = async () => {
    const clearedFilters = {};
    for (const { key } of filters) {
      clearedFilters[key] = [];
    }
    onChange(clearedFilters);
  };
  return (
    <FilterSelectorListPresentation
      {...delegated}
      filters={filters}
      onClear={onClear}
      onChange={onChange}
    />
  );
};
