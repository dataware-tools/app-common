import { Story } from "@storybook/react";
import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";

export default {
  component: LoadingIndicator,
  title: "LoadingIndicator",
};

const Template: Story = (args) => <LoadingIndicator {...args} />;
export const Default = Template.bind({});
Default.args = {};

// This story has animated SVG, so should be skipped in visual regression test
// @ts-expect-error this is bug of loki or storybook
Default.story = {
  parameters: { loki: { skip: true } },
};
