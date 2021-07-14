import React from 'react'
import themeInstance from '../theme'
import { makeStyles } from '@material-ui/core/styles'
import Tabs, { TabsProps } from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

type Props = { styles: ReturnType<typeof useStyles> } & ContainerProps

type ContainerProps = {
  tabNames: string[]
  onChange: (newValue: number) => void
  value: number
} & Omit<TabsProps, 'value' | 'onChange'>

const Component = ({
  tabNames,
  onChange,
  value,
  styles,
  ...delegated
}: Props): JSX.Element => {
  return (
    <Tabs
      orientation='vertical'
      variant='scrollable'
      scrollButtons
      {...delegated}
      onChange={(_, newValue) => {
        onChange(newValue)
      }}
      value={value}
      className={styles.tabs}
    >
      {tabNames.map((tabName) => (
        <Tab key={tabName} label={tabName} className={styles.tab} />
      ))}
    </Tabs>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  tabs: {
    borderRight: `solid 3px ${theme.palette.divider}`,
    boxSizing: 'border-box',
    height: '100%'
  },
  tab: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const styles = useStyles()
  return <Component {...delegated} styles={styles} />
}

export { Container as TabBar }
export type { ContainerProps as TabBarProps }
