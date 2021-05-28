import React from 'react'
import { ToolBar } from './ToolBar'
import Button from '@material-ui/core/Button'

export default {
  component: ToolBar,
  title: 'ToolBar'
}

const Content = () => (
  <>
    <button>Test</button>
    <input />
  </>
)
export const Default = (): JSX.Element => (
  <ToolBar left={<Content />} right={<Content />} />
)

export const WithOtherContent = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <div>test</div>
    <div style={{ flexGrow: 1 }}>
      <ToolBar left={<Content />} right={<Content />} />
    </div>
  </div>
)

const LongContent = () => (
  <>
    <input />
    {Array(40)
      .fill(0)
      .map((_, i) => (
        <button key={i}>Test</button>
      ))}
    <input />
  </>
)

export const HorizontalScrolling = (): JSX.Element => (
  <div style={{ display: 'flex', width: '80vw' }}>
    <div>test</div>
    <div style={{ overflowX: 'auto' }}>
      <ToolBar left={<LongContent />} right={<LongContent />} />
    </div>
  </div>
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
    <ToolBar left={<Content />} right={<Content />} />
    <div
      style={{
        overflowY: 'auto'
      }}
    >
      <div style={{ height: '200vh' }} />
    </div>
  </div>
)

const FixedContent = () => (
  <>
    <Button>This is test</Button>
    <span style={{ width: '10px', flexShrink: 0 }} />
    <div style={{ flexShrink: 0 }}>
      <Button>This is test</Button>
    </div>
  </>
)

export const NarrowViewPort = (): JSX.Element => (
  <div style={{ overflow: 'auto', width: '10vw' }}>
    <ToolBar left={<FixedContent />} right={<FixedContent />} />
  </div>
)
