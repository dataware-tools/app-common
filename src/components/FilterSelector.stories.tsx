import { Story } from "@storybook/react";
import React, { useState } from "react";
import { FilterSelector, FilterSelectorProps } from "./FilterSelector";
import { Spacer } from "./Spacer";

export default {
  component: FilterSelector,
  title: "FilterSelector",
};

const Template: Story<FilterSelectorProps> = (args) => {
  return (
    <>
      <Spacer direction="vertical" size={5} />
      <div style={{ width: "100%", height: "300px", overflowY: "auto" }}>
        <FilterSelector {...args} />
      </div>
    </>
  );
};

const defaultArgs: FilterSelectorProps = {
  groups: { test: Array.from({ length: 5 }, (_, i) => `${i}`) },
  filter: [
    { label: "Test", key: "test", number: 100 },
    { label: "Sample", key: "sample", number: 40 },
    ...Array.from({ length: 10 }, (_, i) => ({
      label: `${i}`,
      key: `${i}`,
    })),
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

export const Controlled = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <FilterSelector
      {...defaultArgs}
      selectedValues={selectedValues}
      onChange={(selectedValues) => setSelectedValues(selectedValues)}
    />
  );
};
