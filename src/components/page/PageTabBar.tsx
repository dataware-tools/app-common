import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TabBar, TabBarProps } from '../TabBar'

type Props = TabBarProps

const useStyles = makeStyles({
  pageTabBar: { flex: 0 }
})

const Component = ({ ...delegated }: Props): JSX.Element => {
  const styles = useStyles()
  return (
    <div className={styles.pageTabBar}>
      <TabBar {...delegated} />
    </div>
  )
}

export { Component as PageTabBar }
export type { Props as PageTabBarProps }
