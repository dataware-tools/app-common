import React from 'react'
import { ConfirmModal, ConfirmModalProps } from './ConfirmModal'
import { Story } from '@storybook/react'
import { confirm } from '../utils/window'

export default {
  component: ConfirmModal,
  title: 'ConfirmModal'
}

const Template: Story<ConfirmModalProps> = (args) => <ConfirmModal {...args} />

export const Default = Template.bind({})
Default.args = {
  onClose: (res) => window.alert(res),
  body: 'This is test! please click button!',
  title: 'test'
}

export const DeleteMode = Template.bind({})
DeleteMode.args = {
  onClose: (res) => window.alert(res),
  body: 'This is test! please click button!',
  title: 'Confirm delete',
  confirmMode: 'delete'
}

export const ConfirmOnClick = (): JSX.Element => (
  <button
    onClick={async () => {
      const res = await confirm({
        body: 'This is test! please click button!',
        title: 'test',
        confirmText: 'yes',
        cancelText: 'no'
      })
      window.alert(res)
    }}
  >
    click me!
  </button>
)
