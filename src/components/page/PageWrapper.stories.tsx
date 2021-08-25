import { Story } from "@storybook/react";
import React from "react";
import { PageWrapper, PageWrapperProps } from "./PageWrapper";

export default {
  component: PageWrapper,
  title: "PageWrapper",
};

const Template: Story<PageWrapperProps> = (args) => <PageWrapper {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "this is test",
  repository: "https://github.com/dataware-tools/app-common",
};
