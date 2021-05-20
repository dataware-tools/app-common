import Button from '@material-ui/core/Button'
import React from 'react'
import { ToolBar } from './ToolBar'

export default {
  component: ToolBar,
  title: 'ToolBar'
}

export const Default = (): JSX.Element => (
  <div style={{ overflowY: 'auto' }}>
    <div
      style={{
        height: '50vh',
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div> this is virtual modal</div>
        <ToolBar>
          <Button>test</Button>
        </ToolBar>
      </div>
      <div
        style={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1
        }}
      >
        {Array(30)
          .fill(0)
          .map((_, index) => (
            <div key={index}>test</div>
          ))}
      </div>
      <ToolBar>
        <Button>test</Button>
      </ToolBar>
    </div>
  </div>
)
