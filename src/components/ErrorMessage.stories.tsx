import React from 'react'
import { Story } from '@storybook/react'
import { ErrorMessage, ErrorMessageProps } from './ErrorMessage'

export default {
  component: ErrorMessage,
  title: 'ErrorMessage'
}

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />
export const Default = Template.bind({})
Default.args = {
  reason: 'this is reason',
  instruction: 'this is instruction'
}
