import { Story } from "@storybook/react";
import React from "react";
import { TestAuthProvider, CONST_STORY_BOOK } from "../../test-utils";
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
Default.parameters = { ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST };
