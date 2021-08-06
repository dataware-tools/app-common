import { ConfirmModal, ConfirmModalProps } from '../components/ConfirmModal'
import { AlertModal, AlertModalProps } from '../components/AlertModal'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../theme'

type ConfirmArgs = Omit<ConfirmModalProps, 'onClose'>

const confirm = ({ ...delegated }: ConfirmArgs): Promise<boolean> => {
  const wrapper = document.body.appendChild(document.createElement('div'))
  const cleanUp = () => {
    ReactDOM.unmountComponentAtNode(wrapper)
    return setTimeout(() => wrapper.remove())
  }

  const promise = new Promise<boolean>((resolve, reject) => {
    try {
      ReactDOM.render(
        <ThemeProvider theme={theme}>
          <ConfirmModal
            onClose={(result) => {
              resolve(result)
              cleanUp()
              return {}
            }}
            {...delegated}
          />
        </ThemeProvider>,
        wrapper
      )
    } catch (e) {
      cleanUp()
      reject(e)
      throw e
    }
  })

  return promise
}

type AlertArgs = Omit<AlertModalProps, 'onClose'>

const alert = ({ ...delegated }: AlertArgs): Promise<boolean> => {
  const wrapper = document.body.appendChild(document.createElement('div'))
  const cleanUp = () => {
    ReactDOM.unmountComponentAtNode(wrapper)
    return setTimeout(() => wrapper.remove())
  }

  const promise = new Promise<boolean>((resolve, reject) => {
    try {
      ReactDOM.render(
        <ThemeProvider theme={theme}>
          <AlertModal
            onClose={(result) => {
              resolve(result)
              cleanUp()
            }}
            {...delegated}
          />
        </ThemeProvider>,
        wrapper
      )
    } catch (e) {
      cleanUp()
      reject(e)
      throw e
    }
  })

  return promise
}
export { confirm, alert }
