import * as React from 'react'
import styles from './styles.module.css'
import { fetchApi, FetchStatus } from './api/ApiUtils'
import { PageWrapper, HierarchicalLink } from './components/Common'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { fetchApi, FetchStatus }
export { PageWrapper, HierarchicalLink }
