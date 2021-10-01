import AddCircle from "@mui/icons-material/AddCircle";
import { Story } from "@storybook/react";
import React from "react";
import { SquareIconButton, SquareIconButtonProps } from "./SquareIconButton";

export default {
  component: SquareIconButton,
  title: "SquareIconButton",
};

const Template: Story<SquareIconButtonProps> = (args) => (
  <SquareIconButton {...args} />
);

export const Default = Template.bind({});
Default.args = { icon: <AddCircle />, onClick: () => window.alert("click!") };

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <AddCircle />,
  onClick: () => window.alert("click!"),
  disabled: true,
};
