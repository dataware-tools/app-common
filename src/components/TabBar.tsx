import React from 'react'
import Tabs, { TabsProps } from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

type Props = ContainerProps

type ContainerProps = {
  tabNames: string[]
  onChange: (newValue: number) => void
  value: number
} & Omit<TabsProps, 'value' | 'onChange'>

const Component = ({
  tabNames,
  onChange,
  value,
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
      sx={{
        borderRight: 3,
        borderColor: 'divider',
        boxSizing: 'border-box',
        height: '100%'
      }}
    >
      {tabNames.map((tabName) => (
        <Tab
          key={tabName}
          label={tabName}
          sx={{
            ':hover': {
              backgroundColor: 'action.hover'
            }
          }}
        />
      ))}
    </Tabs>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  return <Component {...delegated} />
}

export { Container as TabBar }
export type { ContainerProps as TabBarProps }
