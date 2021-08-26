import { Story } from "@storybook/react";
import React from "react";
import { TestAuthProvider, CONST_STORY_BOOK } from "../test-utils";
import { HeaderPresentation, HeaderPresentationProps } from "./Header";

export default {
  component: HeaderPresentation,
  title: "Header",
};

const Template: Story<HeaderPresentationProps> = (args) => (
  <TestAuthProvider>
    <HeaderPresentation {...args} />
  </TestAuthProvider>
);

export const BeforeLogin = Template.bind({});
BeforeLogin.args = {
  isAuthenticated: false,
  onLogin: () => window.confirm("login!"),
  onLogout: () => window.confirm("logout!"),
};
// This story has logic for authentication, so should be skipped in visual regression test
BeforeLogin.parameters = {
  ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST,
};

export const AfterLogin = Template.bind({});
AfterLogin.args = {
  isAuthenticated: true,
  onLogin: () => window.confirm("login!"),
  onLogout: () => window.confirm("logout!"),
};
// This story has logic for authentication, so should be skipped in visual regression test
// @ts-expect-error this is bug of loki or storybook
After.parameters = { ...CONST_STORY_BOOK.PARAM_SKIP_VISUAL_REGRESSION_TEST };
