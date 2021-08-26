import { Story } from "@storybook/react";
import React from "react";
import { CONST_STORY_BOOK } from "../test-utils";
import { LoadingIndicator } from "./LoadingIndicator";

export default {
  component: LoadingIndicator,
  title: "LoadingIndicator",
};

const Template: Story = (args) => <LoadingIndicator {...args} />;
export const Default = Template.bind({});
Default.args = {};
// This story has animated SVG, so should be skipped in visual regression test
Default.parameters = { ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST };
