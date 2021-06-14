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
  body: 'test',
  title: 'test'
}

export const ConfirmOnClick = (): JSX.Element => (
  <button
    onClick={async () => {
      const res = await confirm({
        body: 'test',
        title: 'test',
        confirmText: 'test',
        cancelText: 'test'
      })
      window.alert(res)
    }}
  >
    click me!
  </button>
)
