import { Story } from "@storybook/react";
import React from "react";
import { Spacer, SpacerProps } from "./Spacer";

export default {
  component: Spacer,
  title: "Spacer",
};

export const Default: Story<SpacerProps> = ({ ...args }): JSX.Element => (
  <>
    <div>this is</div>
    <Spacer direction="vertical" {...args} />
    <div>test</div>
  </>
);
