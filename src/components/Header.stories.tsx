import { Story } from "@storybook/react";
import React from "react";
import { HeaderPresentation, HeaderPresentationProps } from "./Header";

export default {
  component: HeaderPresentation,
  title: "Header",
};

const Template: Story<HeaderPresentationProps> = (args) => (
  <HeaderPresentation {...args} />
);

export const BeforeLogin = Template.bind({});
BeforeLogin.args = {
  isAuthenticated: false,
  onLogin: () => window.confirm("login!"),
  onLogout: () => window.confirm("logout!"),
};

export const AfterLogin = Template.bind({});
AfterLogin.args = {
  isAuthenticated: true,
  onLogin: () => window.confirm("login!"),
  onLogout: () => window.confirm("logout!"),
};
