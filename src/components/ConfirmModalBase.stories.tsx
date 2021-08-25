import Button from "@material-ui/core/Button";
import { Story } from "@storybook/react";
import React from "react";
import { ConfirmModalBase, ConfirmModalBaseProps } from "./ConfirmModalBase";

export default {
  component: ConfirmModalBase,
  title: "ConfirmModalBase",
};

const Template: Story<ConfirmModalBaseProps> = (args) => (
  <ConfirmModalBase
    {...args}
    // This option is necessary for visual regression test by loki
    disablePortal
  />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "test",
  body: "This is test! please click button!",
  buttons: <Button>Test</Button>,
};
