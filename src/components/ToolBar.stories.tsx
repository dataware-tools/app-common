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

// ! Want know why story is so complex? See: https://github.com/dataware-tools/app-common/pull/33
export const RegressionTestForPR33 = (): JSX.Element => (
  // this div element simulate Material UI Dialog
  <div
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {/* this div element is necessary to keep non main contents of dialog within viewport (e.g toolbar, tab, close button etc...) */}
    <div
      style={{
        height: '50vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* if size of main contents in dialog over a certain size, ToolBar shrinks */}
      <ToolBar>
        <button>test</button>
      </ToolBar>
      <div
        style={{
          overflowY: 'auto'
        }}
      >
        <div style={{ height: '200vh' }} />
      </div>
    </div>
  </div>
)
