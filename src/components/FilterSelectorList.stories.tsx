import { Story } from "@storybook/react";
import React, { useState } from "react";
import {
  FilterSelectorList,
  FilterSelectorListProps,
} from "./FilterSelectorList";

export default {
  component: FilterSelectorList,
  title: "FilterSelectorList",
};

const Template: Story<FilterSelectorListProps> = (args) => (
  <FilterSelectorList {...args} />
);

const defaultArgs: FilterSelectorListProps = {
  filters: [
    {
      label: "First",
      key: "first",
      filter: [
        { label: "Test", key: "test", number: 100 },
        { label: "Sample", key: "sample", number: 40 },
      ],
    },
    {
      label: "Second",
      key: "second",
      filter: [
        { label: "Foo", key: "foo", number: 10 },
        { label: "Bar", key: "bar", number: 20 },
      ],
    },
  ],
  selectedValues: { first: ["test"], second: ["bar"] },
  onChange: (selectedValues) => {
    window.confirm(JSON.stringify(selectedValues));
  },
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Controlled = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<
    FilterSelectorListProps["selectedValues"]
  >({ first: [], second: [] });

  return (
    <FilterSelectorList
      {...defaultArgs}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
    />
  );
};
