import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import React from 'react'
import { ToolBar } from './ToolBar'

export default {
  component: ToolBar,
  title: 'ToolBar'
}

// ! Want know why story is so complex? See: https://github.com/dataware-tools/app-common/pull/33

export const Default = (): JSX.Element => (
  <Dialog open fullWidth maxWidth='xl'>
    <div
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px'
      }}
    >
      <ToolBar>
        <Button>test</Button>
      </ToolBar>
      <div
        style={{
          overflowY: 'auto',
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
  </Dialog>
)
