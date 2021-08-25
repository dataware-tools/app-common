import { Story } from "@storybook/react";
import React from "react";
import { HealthCheck } from "./HealthCheck";

export default {
  component: HealthCheck,
  title: "HealthCheck",
};

const Template: Story = (args) => <HealthCheck {...args} />;

export const Default = Template.bind({});
