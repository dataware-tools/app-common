import React from 'react'
import { DialogTemplate, DialogTemplateProps } from './DialogTemplate'
import { Story } from '@storybook/react'

export default {
  component: DialogTemplate,
  title: 'Layout/DialogTemplate'
}

const Template: Story<DialogTemplateProps> = (args) => (
  <DialogTemplate {...args} />
)
export const Default = Template.bind({})
Default.args = {
  open: true,
  maxWidth: 'xl'
}
