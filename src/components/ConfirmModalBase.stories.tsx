import React from 'react'
import { ConfirmModalBase, ConfirmModalBaseProps } from './ConfirmModalBase'
import { Story } from '@storybook/react'
import Button from '@material-ui/core/Button'

export default {
  component: ConfirmModalBase,
  title: 'ConfirmModalBase'
}

const Template: Story<ConfirmModalBaseProps> = (args) => (
  <ConfirmModalBase {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'test',
  body: 'test',
  buttons: <Button>Test</Button>
}
