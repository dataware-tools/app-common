import { Story } from "@storybook/react";
import React from "react";
import { TestAuthProvider } from "../../test-utils";
import { PageWrapper, PageWrapperProps } from "./PageWrapper";

export default {
  component: PageWrapper,
  title: "PageWrapper",
};

const Template: Story<PageWrapperProps> = (args) => (
  <TestAuthProvider>
    <PageWrapper {...args} />
  </TestAuthProvider>
);
export const Default = Template.bind({});
Default.args = {
  children: "this is test",
  repository: "https://github.com/dataware-tools/app-common",
};
// This story has logic for authentication, so should be skipped in visual regression test
// @ts-expect-error this is bug of loki or storybook
Default.story = {
  parameters: { loki: { skip: true } },
};
