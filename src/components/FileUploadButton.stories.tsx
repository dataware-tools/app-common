import { Story } from "@storybook/react";
import React from "react";
import { FileUploadButton, FileUploadButtonProps } from "./FileUploadButton";

export default {
  component: FileUploadButton,
  title: "FileUploadButton",
};

const Template: Story<FileUploadButtonProps> = (args) => (
  <FileUploadButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "test",
  onFileChange: (files) => window.alert(`upload ${files?.[0].name}`),
};

export const Pending = Template.bind({});
Pending.args = { children: "test", loading: true };
// This story has animated SVG, so should be skipped in visual regression test
// @ts-expect-error this is bug of loki or storybook
Pending.story = {
  parameters: { loki: { skip: true } },
};
