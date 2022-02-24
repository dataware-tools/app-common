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
export const InContainer = (): JSX.Element => (
  <div style={{ width: "500px", height: "300px", border: "1px solid black" }}>
    <LoadingIndicator />
  </div>
);
// This story has animated SVG, so should be skipped in visual regression test
Default.parameters = { ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST };
