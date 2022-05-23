import { Story } from "@storybook/react";
import React, { useState } from "react";
import {
  FilterSelectorList,
  FilterSelectorListProps,
} from "./FilterSelectorList";
import { Spacer } from "./Spacer";

export default {
  component: FilterSelectorList,
  title: "FilterSelectorList",
};

const Template: Story<FilterSelectorListProps> = (args) => (
  <>
    <Spacer direction="vertical" size={5} />
    <div style={{ width: "100%", height: "300px", overflowY: "auto" }}>
      <FilterSelectorList {...args} />
    </div>
  </>
);

const defaultArgs: FilterSelectorListProps = {
  filters: [
    {
      label: "First",
      key: "first",
      groups: { test: Array.from({ length: 5 }, (_, i) => `${i}`) },
      filter: [
        { label: "Test", key: "test", number: 100 },
        { label: "Sample", key: "sample", number: 40 },
        ...Array.from({ length: 10 }, (_, i) => ({
          label: `${i}`,
          key: `${i}`,
        })),
      ],
    },
    {
      label: "Second",
      key: "second",
      groups: { test: Array.from({ length: 5 }, (_, i) => `${i}`) },
      filter: [
        { label: "Foo", key: "foo", number: 10 },
        { label: "Bar", key: "bar", number: 20 },
        ...Array.from({ length: 10 }, (_, i) => ({
          label: `${i}`,
          key: `${i}`,
        })),
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
