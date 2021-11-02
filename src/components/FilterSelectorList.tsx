import List from "@mui/material/List";
import React from "react";
import { FilterSelectorProps, FilterSelector } from "./FilterSelector";

export type FilterList = {
  label: string;
  key: string;
  filter: FilterSelectorProps["filter"];
}[];
type SelectedValues = { [key: string]: FilterSelectorProps["selectedValues"] };
export type FilterSelectorListPresentationProps = FilterSelectorListProps;
export type FilterSelectorListProps = {
  filters: FilterList;
  onChange: (filters: SelectedValues) => Promise<void> | void;
  selectedValues: SelectedValues;
};

export const FilterSelectorListPresentation = ({
  filters,
  onChange,
  selectedValues,
}: FilterSelectorListPresentationProps): JSX.Element => {
  return (
    <List>
      {filters.map((elem) => (
        <FilterSelector
          key={elem.key}
          header={elem.label}
          filter={elem.filter}
          onChange={async (newSelectedValues) =>
            onChange({ ...selectedValues, [elem.key]: newSelectedValues })
          }
          selectedValues={selectedValues[elem.key]}
        />
      ))}
    </List>
  );
};

export const FilterSelectorList = ({
  ...delegated
}: FilterSelectorListProps): JSX.Element => {
  return <FilterSelectorListPresentation {...delegated} />;
};
