import { Story } from "@storybook/react";
import React from "react";
import { DialogTemplate, DialogTemplateProps } from "./DialogTemplate";

export default {
  component: DialogTemplate,
  title: "Layout/DialogTemplate",
};

const Template: Story<DialogTemplateProps> = (args) => (
  <DialogTemplate
    {...args}
    // This option is necessary for visual regression test by loki
    disablePortal
  />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  maxWidth: "xl",
};
