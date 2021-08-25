import { Story } from "@storybook/react";
import React from "react";
import { Sample, SampleProps } from "./Sample";

export default {
  component: Sample,
  title: "Sample",
};

const Template: Story<SampleProps> = (args) => <Sample {...args} />;

export const Default = Template.bind({});
Default.args = {
  sample: "this is simple template for making component",
};
