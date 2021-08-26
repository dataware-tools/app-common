import { Story } from "@storybook/react";
import React from "react";
import { CONST_STORY_BOOK } from "../test-utils";
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
Pending.parameters = { ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST };
