import React, { useState } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import themeInstance from '../theme'
import { Spacer } from './Spacer'
import { ConfirmModalBase, ConfirmModalBaseProps } from './ConfirmModalBase'

type Props = {
  onCancel: () => void
  onConfirm: () => void
  open: boolean
} & Omit<ContainerProps, 'onClose'>

type ContainerProps = {
  confirmText?: string
  confirmButtonProps?: ButtonProps
  confirmMode?: 'default' | 'delete'
  cancelText?: string
  cancelButtonProps?: ButtonProps
  reverseButtons?: boolean
  onClose: (confirmResult: boolean) => void
} & Omit<ConfirmModalBaseProps, 'buttons' | 'open'>

const DeleteButton = withStyles((theme: typeof themeInstance) => ({
  root: {
    color:
      theme.palette.getContrastText(theme.palette.error.main) + ' !important',
    backgroundColor: theme.palette.error.main + ' !important',
    '&:hover': {
      backgroundColor: theme.palette.error.dark + ' !important'
    }
  }
}))(Button)

const Component = ({
  open,
  confirmText,
  onConfirm,
  confirmButtonProps,
  cancelText,
  onCancel,
  cancelButtonProps,
  reverseButtons,
  confirmMode,
  ...delegated
}: Props) => {
  const ConfirmButton = () => {
    switch (confirmMode) {
      case 'delete':
        return (
          <DeleteButton
            variant='contained'
            {...confirmButtonProps}
            onClick={onConfirm}
          >
            {confirmText || 'delete'}
          </DeleteButton>
        )

      case 'default':
      default:
        return (
          <Button
            variant='contained'
            {...confirmButtonProps}
            onClick={onConfirm}
          >
            {confirmText || 'confirm'}
          </Button>
        )
    }
  }
  const CancelButton = () => (
    <Button variant='text' {...cancelButtonProps} onClick={onCancel}>
      {cancelText || 'cancel'}
    </Button>
  )
  return (
    <ConfirmModalBase
      {...delegated}
      open={open}
      buttons={
        <>
          {reverseButtons ? <CancelButton /> : <ConfirmButton />}
          <Spacer direction='horizontal' size='10px' />
          {reverseButtons ? <ConfirmButton /> : <CancelButton />}
        </>
      }
    />
  )
}
const Container = ({
  body,
  title,
  onClose,
  ...delegated
}: ContainerProps): JSX.Element | null => {
  const [open, setOpen] = useState(true)

  const onCancel = () => {
    onClose(false)
    setOpen(false)
  }

  const onConfirm = () => {
    onClose(true)
    setOpen(false)
  }

  return (
    <Component
      {...delegated}
      open={open}
      body={body}
      title={title}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  )
}

export { Container as ConfirmModal }
export type { ContainerProps as ConfirmModalProps }
