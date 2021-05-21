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

export const WithOtherContent = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <div>test</div>
    <div style={{ flexGrow: 1 }}>
      <ToolBar>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
      </ToolBar>
    </div>
  </div>
)

export const HorizontalScrolling = (): JSX.Element => (
  <ToolBar>
    {Array(100)
      .fill(0)
      .map((_, i) => (
        <button key={i}>Test</button>
      ))}
  </ToolBar>
)

// ! Want know why story is so complex? See: https://github.com/dataware-tools/app-common/pull/33
export const RegressionTestForPR33 = (): JSX.Element => (
  // this div element is necessary to keep non main contents of Mui Dialog within viewport (e.g toolbar, tab, close button etc...)
  <div
    style={{
      height: '50vh',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {/* if size of main contents in dialog over a certain size, ToolBar shrinks */}
    <ToolBar>
      <button>Test</button>
    </ToolBar>
    <div
      style={{
        overflowY: 'auto'
      }}
    >
      <div style={{ height: '200vh' }} />
    </div>
  </div>
)
