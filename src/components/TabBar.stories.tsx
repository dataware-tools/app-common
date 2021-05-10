import React, { useState } from 'react'
import { Story } from '@storybook/react'

import { TabBar, TabBarProps } from './TabBar'

export default {
  component: TabBar,
  title: 'TabBar'
}

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />
const defaultTabNames = ['foo', 'bar']
export const Default = Template.bind({})
Default.args = {
  tabNames: defaultTabNames,
  onChange: (newValue: number) => {
    console.log(defaultTabNames[newValue])
  },
  value: 0
}

const ComponentControlled = () => {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 0 }}>
        <TabBar
          tabNames={defaultTabNames}
          onChange={(newValue) => {
            setCurrentTab(newValue)
          }}
          value={currentTab}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {defaultTabNames[currentTab]}!!
      </div>
    </div>
  )
}

export const Controlled = (): JSX.Element => <ComponentControlled />
