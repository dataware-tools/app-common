import { Story } from "@storybook/react";
import React from "react";
import { FetchContainer, FetchContainerProps } from "./FetchContainer";

export default {
  component: FetchContainer,
  title: "FetchContainer",
};

const Template: Story<FetchContainerProps> = (args) => (
  <FetchContainer {...args}>success!</FetchContainer>
);

export const Error = Template.bind({});
Error.args = {
  isFetchSuccess: false,
  isFetchEnd: true,
  errorMessage: { reason: "test", instruction: "test" },
};

export const Waiting = Template.bind({});
Waiting.args = {
  isFetchSuccess: true,
  isFetchEnd: false,
  errorMessage: { reason: "test", instruction: "test" },
};

export const Success = Template.bind({});
Success.args = {
  isFetchSuccess: true,
  isFetchEnd: true,
  errorMessage: { reason: "test", instruction: "test" },
};
