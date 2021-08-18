import React, { useState } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
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
  onClose: (
    confirmResult: boolean
  ) =>
    | Promise<{ cancelCloseModal?: boolean } | undefined>
    | { cancelCloseModal?: boolean }
    | undefined
} & Omit<ConfirmModalBaseProps, 'buttons' | 'open'>

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
          <Button
            variant='contained'
            {...confirmButtonProps}
            onClick={onConfirm}
            color='error'
          >
            {confirmText || 'delete'}
          </Button>
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

  const onCancel = async () => {
    const res = await onClose(false)
    if (res?.cancelCloseModal) {
      return
    }
    setOpen(false)
  }

  const onConfirm = async () => {
    const res = await onClose(true)
    if (res?.cancelCloseModal) {
      return
    }
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
