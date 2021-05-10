import React from 'react'
import { HealthCheck } from './HealthCheck'
import { Story } from '@storybook/react'

export default {
  component: HealthCheck,
  title: 'HealthCheck'
}

const Template: Story = (args) => <HealthCheck {...args} />

export const Default = Template.bind({})
