import React from 'react'
import { Story } from '@storybook/react'
import { Table, TableProps } from './Table'

export default {
  component: Table,
  title: 'Table'
}

const Template: Story<TableProps> = (args) => <Table {...args} />
export const Default = Template.bind({})
Default.args = {
  rows: [
    { name: 'user', description: '外部の人', role_id: '1' },
    { name: 'internal user', description: '内部の人', role_id: '2' },
    { name: 'admin', description: '教員', role_id: '3' }
  ],
  columns: [
    { field: 'role_id', type: 'number' },
    { field: 'name', type: 'string' },
    { field: 'description' }
  ],
  onDeleteRow: (detail: any) => {
    window.alert(`delete! ${JSON.stringify(detail)}`)
  },
  onClickRow: (detail: any) => {
    window.alert(`click! ${JSON.stringify(detail)}`)
  }
}

const testArgs = {
  rows: [
    { name: 'user', description: '外部の人', role_id: '1' },
    { name: 'internal user', description: '内部の人', role_id: '2' },
    { name: 'admin', description: '教員', role_id: '3' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' },
    { name: 'test', description: 'testの人', role_id: '1' }
  ],
  columns: [
    { field: 'role_id', type: 'number' as const },
    { field: 'name', type: 'string' as const },
    { field: 'description' }
  ],
  onDeleteRow: (detail: any) => {
    window.alert(`delete! ${JSON.stringify(detail)}`)
  },
  onClickRow: (detail: any) => {
    window.alert(`click! ${JSON.stringify(detail)}`)
  }
}

export const StickyHeader = (): JSX.Element => (
  <div style={{ height: '60vh', overflow: 'auto' }}>
    <Table stickyHeader {...testArgs} />
  </div>
)
