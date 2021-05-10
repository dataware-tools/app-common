import React from 'react'
import { Story } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

export default {
  component: Footer,
  title: 'Footer'
}

const Template: Story<FooterProps> = (args) => <Footer {...args} />
export const Default = Template.bind({})
Default.args = {
  repository: 'https://github.com/dataware-tools/app-common'
}
