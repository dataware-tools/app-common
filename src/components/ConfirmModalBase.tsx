import React, { ReactNode } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import { DialogContainer } from './DialogContainer'
import { DialogTitle } from './DialogTitle'
import { DialogBody } from './DialogBody'
import { DialogToolBar } from './DialogToolBar'

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
      <DialogContainer height={height}>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        {body ? <DialogBody>{body}</DialogBody> : null}
        <DialogToolBar right={buttons} />
      </DialogContainer>
    </Dialog>
  )
}

export { Component as ConfirmModalBase }
export type { Props as ConfirmModalBaseProps }
