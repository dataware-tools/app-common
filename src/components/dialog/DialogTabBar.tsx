import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TabBar, TabBarProps } from '../TabBar'

type Props = TabBarProps

const useStyles = makeStyles({
  dialogTabBar: {
    flex: 0
  }
})
const Component = ({ ...delegated }: Props): JSX.Element => {
  const styles = useStyles()
  return (
    <div className={styles.dialogTabBar}>
      <TabBar {...delegated} />
    </div>
  )
}

export { Component as DialogTabBar }
export type { Props as DialogTabBarProps }
