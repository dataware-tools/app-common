import React, { useState } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { ConfirmModalBase, ConfirmModalBaseProps } from './ConfirmModalBase'

type Props = {
  onConfirm: () => void
  open: boolean
} & Omit<ContainerProps, 'onClose'>

type ContainerProps = {
  confirmText?: string
  confirmButtonProps?: ButtonProps
  onClose: (confirmResult: boolean) => void
} & Omit<ConfirmModalBaseProps, 'buttons' | 'open'>

const Component = ({
  open,
  confirmText,
  onConfirm,
  confirmButtonProps,
  ...delegated
}: Props) => {
  const ConfirmButton = () => (
    <Button variant='contained' {...confirmButtonProps} onClick={onConfirm}>
      {confirmText || 'confirm'}
    </Button>
  )
  return (
    <ConfirmModalBase {...delegated} buttons={<ConfirmButton />} open={open} />
  )
}

const Container = ({
  body,
  title,
  onClose,
  ...delegated
}: ContainerProps): JSX.Element | null => {
  const [open, setOpen] = useState(true)

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
      onConfirm={onConfirm}
    />
  )
}

export { Container as AlertModal }
export type { ContainerProps as AlertModalProps }
