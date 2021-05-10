import React from 'react'
import { Story } from '@storybook/react'
import { LoadingIndicator } from './LoadingIndicator'

export default {
  component: LoadingIndicator,
  title: 'LoadingIndicator'
}

const Template: Story = (args) => <LoadingIndicator {...args} />
export const Default = Template.bind({})
Default.args = {}
