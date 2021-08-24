import React, { MouseEventHandler, ReactNode } from 'react'
import Box from '@material-ui/core/Box'

type ContainerProps = {
  onClick: MouseEventHandler<HTMLDivElement>
  disabled?: boolean
  icon: ReactNode
}

const Container = ({
  icon,
  onClick,
  disabled
}: ContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        cursor: disabled ? 'unset' : 'pointer',
        display: 'flex',
        height: '40px',
        justifyContent: 'center',
        opacity: disabled ? '50%' : 'unset',
        width: '40px',
        '&:hover': {
          backgroundColor: disabled ? 'unset' : 'action.hover'
        }
      }}
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </Box>
  )
}

export { Container as SquareIconButton }
export type { ContainerProps as SquareIconButtonProps }
