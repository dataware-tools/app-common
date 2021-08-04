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
  body?: ReactNode
  title?: ReactNode
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
            {title ? (
              typeof title === 'string' ? (
                <DialogTitle>{title}</DialogTitle>
              ) : (
                title
              )
            ) : null}
            <DialogMain>
              {body ? (
                typeof body === 'string' ? (
                  <DialogBody>{body}</DialogBody>
                ) : (
                  body
                )
              ) : null}
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
