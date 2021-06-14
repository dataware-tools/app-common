import React from 'react'
import { AlertModal, AlertModalProps } from './AlertModal'
import { Story } from '@storybook/react'
import { alert } from '../utils/window'

export default {
  component: AlertModal,
  title: 'AlertModal'
}

const Template: Story<AlertModalProps> = (args) => <AlertModal {...args} />

export const Default = Template.bind({})
Default.args = {
  onClose: (res) => window.alert(res),
  body: 'test',
  title: 'test'
}

export const AlertOnClick = (): JSX.Element => (
  <button
    onClick={async () => {
      const res = await alert({
        body: 'test',
        title: 'test',
        confirmText: 'test'
      })
      window.alert(res)
    }}
  >
    click me!
  </button>
)
