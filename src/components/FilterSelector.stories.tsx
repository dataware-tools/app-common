import { Story } from "@storybook/react";
import React from "react";
import { FilterSelector, FilterSelectorProps } from "./FilterSelector";

export default {
  component: FilterSelector,
  title: "FilterSelector",
};

const Template: Story<FilterSelectorProps> = (args) => (
  <FilterSelector {...args} />
);

const defaultArgs: FilterSelectorProps = {
  filter: [
    { label: "Test", key: "test", number: 100 },
    { label: "Sample", key: "sample" },
  ],
  selectedValues: ["test"],
  onChange: (selectedValues) => {
    window.confirm(JSON.stringify(selectedValues));
  },
  header: "Filters",
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const DisableCollapse = Template.bind({});
DisableCollapse.args = {
  ...defaultArgs,
  disableCollapse: true,
};