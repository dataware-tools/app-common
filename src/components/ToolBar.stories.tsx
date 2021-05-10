import React from 'react'
import { ToolBar } from './ToolBar'

export default {
  component: ToolBar,
  title: 'ToolBar'
}

export const Default = (): JSX.Element => (
  <ToolBar>
    <button>Test</button>
    <button>Test</button>
    <button>Test</button>
  </ToolBar>
)
