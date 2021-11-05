import { Story } from "@storybook/react";
import React from "react";
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

export const Default = Template.bind({});
Default.args = {
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
