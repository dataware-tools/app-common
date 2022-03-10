import { Story } from "@storybook/react";
import React, { useState } from "react";
import {
  RecursiveFilterSelectorList,
  RecursiveFilterSelectorListProps,
} from "./RecursiveFilterSelectorList";
import { Spacer } from "./Spacer";

export default {
  component: RecursiveFilterSelectorList,
  title: "RecursiveFilterSelectorList",
};

const Template: Story<RecursiveFilterSelectorListProps> = (args) => (
  <>
    <Spacer direction="vertical" size={5} />
    <div style={{ width: "100%", height: "300px", overflowY: "auto" }}>
      <RecursiveFilterSelectorList {...args} />
    </div>
  </>
);

const defaultArgs: RecursiveFilterSelectorListProps = {
  filters: [
    {
      label: "First",
      key: "first",
      children: [
        {
          label: "group-1-1",
          children: [
            { label: "Test", key: "group-1-1-test", number: 100 },
            { label: "Test2", key: "group-1-1-test2", number: 100 },
          ],
        },
        { label: "Test", key: "group-1-test", number: 100 },
        { label: "Test2", key: "group-1-test2", number: 100 },
      ],
    },
    {
      label: "Second",
      key: "second",
      children: [
        {
          label: "group-2-1",
          children: [
            { label: "Test", key: "group-2-1-test", number: 100 },
            { label: "Test2", key: "group-2-1-test2", number: 100 },
          ],
        },
        { label: "Foo", key: "foo", number: 100 },
        { label: "Bar", key: "bar", number: 100 },
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
    RecursiveFilterSelectorListProps["selectedValues"]
  >({ first: [], second: [] });

  return (
    <RecursiveFilterSelectorList
      {...defaultArgs}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
    />
  );
};
