import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { SquareIconButton } from '../SquareIconButton'

type ComponentProps = { onClick: () => void }
const Component = ({ onClick }: ComponentProps): JSX.Element => (
  <div style={{ position: 'absolute', top: 10, right: 10 }}>
    <SquareIconButton onClick={onClick} icon={<CloseIcon />} />
  </div>
)

export { Component as DialogCloseButton }
export type { ComponentProps as DialogCloseButtonProps }
