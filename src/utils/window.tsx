import { ConfirmModal, ConfirmModalProps } from 'components/ConfirmModal'
import { AlertModal, AlertModalProps } from 'components/AlertModal'
import React from 'react'
import ReactDOM from 'react-dom'

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
        <ConfirmModal
          onClose={(result) => {
            resolve(result)
            cleanUp()
          }}
          {...delegated}
        />,
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
        <AlertModal
          onClose={(result) => {
            resolve(result)
            cleanUp()
          }}
          {...delegated}
        />,
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
