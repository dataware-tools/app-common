import { Story } from "@storybook/react";
import React from "react";
import { DialogTemplate, DialogTemplateProps } from "./DialogTemplate";

export default {
  component: DialogTemplate,
  title: "Layout/DialogTemplate",
};

const Template: Story<DialogTemplateProps> = (args) => (
  <DialogTemplate {...args} />
);
export const Default = Template.bind({});
Default.args = {
  open: true,
  maxWidth: "xl",
};
