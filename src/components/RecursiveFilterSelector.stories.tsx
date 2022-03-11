import { Story } from "@storybook/react";
import React, { useState } from "react";
import {
  RecursiveFilterSelector,
  RecursiveFilterSelectorProps,
} from "./RecursiveFilterSelector";
import { Spacer } from "./Spacer";

export default {
  component: RecursiveFilterSelector,
  title: "RecursiveFilterSelector",
};

const Template: Story<RecursiveFilterSelectorProps> = (args) => {
  return (
    <>
      <Spacer direction="vertical" size={5} />
      <div style={{ width: "100%", height: "300px", overflowY: "auto" }}>
        <RecursiveFilterSelector {...args} />
      </div>
    </>
  );
};

const defaultArgs: RecursiveFilterSelectorProps = {
  filters: [
    {
      label: "group-1",
      key: "group-1",
      children: [
        {
          label: "group-1-1",
          children: [
            { label: "Test0", key: "group-1-1-test0", number: 100 },
            { label: "Test1", key: "group-1-1-test1", number: 100 },
            { label: "Test2", key: "group-1-1-test2", number: 100 },
            { label: "Test3", key: "group-1-1-test3", number: 100 },
            { label: "Test4", key: "group-1-1-test4", number: 100 },
            { label: "Test5", key: "group-1-1-test5", number: 100 },
            { label: "Test6", key: "group-1-1-test6", number: 100 },
            { label: "Test7", key: "group-1-1-test7", number: 100 },
            { label: "Test8", key: "group-1-1-test8", number: 100 },
            { label: "Test9", key: "group-1-1-test9", number: 100 },
          ],
        },
        { label: "Test", key: "group-1-test", number: 100 },
        { label: "Test2", key: "group-1-test2", number: 100 },
      ],
    },
    { label: "Test", key: "test", number: 100 },
    { label: "Sample", key: "sample", number: 40 },
  ],
  selectedValues: ["test"],
  onChange: (selectedValues) => {
    window.confirm(JSON.stringify(selectedValues));
  },
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
    <RecursiveFilterSelector
      {...defaultArgs}
      selectedValues={selectedValues}
      onChange={(selectedValues) => setSelectedValues(selectedValues)}
    />
  );
};
