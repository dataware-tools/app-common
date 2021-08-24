import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'

type ComponentProps = { onClick: () => void }
const Component = ({ onClick }: ComponentProps): JSX.Element => {
  return (
    <Box sx={{ position: 'absolute', right: 15, top: -10 }}>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'white',
          border: 1,
          borderColor: 'grey[600]',
          borderRadius: '50%',
          color: 'grey[600]',
          cursor: 'pointer',
          display: 'flex',
          height: 30,
          justifyContent: 'center',
          position: 'fixed',
          width: 30
        }}
        onClick={onClick}
      >
        <CloseIcon />
      </Box>
    </Box>
  )
}

export { Component as DialogCloseButton }
export type { ComponentProps as DialogCloseButtonProps }
