import React from 'react'
import { DialogBody } from './DialogBody'
import { DialogCloseButton } from './DialogCloseButton'
import { DialogContainer } from './DialogContainer'
import { DialogWrapper } from './DialogWrapper'
import { DialogMain } from './DialogMain'
import { DialogTabBar } from './DialogTabBar'
import { DialogTitle } from './DialogTitle'
import { DialogToolBar } from './DialogToolBar'
import { DialogSubTitle } from './DialogSubTitle'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'

const Component = ({ ...delegated }: DialogProps): JSX.Element => (
  <Dialog {...delegated}>
    <DialogWrapper>
      <DialogCloseButton onClick={() => window.alert('close!')} />
      <DialogTitle>Title</DialogTitle>
      <DialogContainer height='60vh' padding='0 0 20px'>
        <DialogTabBar
          tabNames={Array(20)
            .fill(0)
            .map((_, i) => `test${i}`)}
          onChange={() => window.alert('change')}
          value={1}
        />
        <DialogBody>
          <DialogSubTitle>Sub title</DialogSubTitle>
          <DialogMain>
            main <br />
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
                  <br />
                </div>
              ))}
          </DialogMain>
          <DialogToolBar right={<button>toolbar</button>} />
        </DialogBody>
      </DialogContainer>
    </DialogWrapper>
  </Dialog>
)

export { Component as DialogTemplate }
export type { DialogProps as DialogTemplateProps }
