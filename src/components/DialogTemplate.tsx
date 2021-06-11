import React from 'react'
import { DialogBody } from './DialogBody'
import { DialogCloseButton } from './DialogCloseButton'
import { DialogContainer } from './DialogContainer'
import { DialogTitle } from './DialogTitle'
import { DialogToolBar } from './DialogToolBar'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'

const Component = ({ ...delegated }: DialogProps): JSX.Element => (
  <Dialog {...delegated}>
    <DialogContainer>
      <DialogCloseButton onClick={() => window.alert('close!')} />
      <DialogTitle>title</DialogTitle>
      <DialogBody>
        body
        <br /> aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
      </DialogBody>
      <DialogToolBar right={<button>toolbar</button>} />
    </DialogContainer>
  </Dialog>
)

export { Component as DialogTemplate }
export type { DialogProps as DialogTemplateProps }
