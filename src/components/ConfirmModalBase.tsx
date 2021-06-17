import React, { ReactNode } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import { DialogWrapper } from './dialog/DialogWrapper'
import { DialogTitle } from './dialog/DialogTitle'
import { DialogBody } from './dialog/DialogBody'
import { DialogToolBar } from './dialog/DialogToolBar'
import { DialogContainer } from './dialog/DialogContainer'
import { DialogMain } from './dialog/DialogMain'

type Props = {
  open: boolean
  body?: string
  title?: string
  height?: string
  buttons: ReactNode
} & Omit<DialogProps, 'onClose'>

const Component = ({
  open,
  body,
  title,
  height,
  buttons,
  ...dialogProps
}: Props): JSX.Element => {
  return (
    <Dialog {...dialogProps} open={open}>
      <DialogWrapper>
        <DialogContainer height={height}>
          <DialogBody padding='0'>
            {title ? <DialogTitle>{title}</DialogTitle> : null}
            <DialogMain>
              {body ? <DialogBody>{body}</DialogBody> : null}
            </DialogMain>
            <DialogToolBar right={buttons} />
          </DialogBody>
        </DialogContainer>
      </DialogWrapper>
    </Dialog>
  )
}

export { Component as ConfirmModalBase }
export type { Props as ConfirmModalBaseProps }
