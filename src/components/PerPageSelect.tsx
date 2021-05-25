import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import themeInstance from 'theme'
import { makeStyles } from '@material-ui/core/styles'
import { Spacer } from './Spacer'

type Props = { classes: ReturnType<typeof useStyles> } & ContainerProps
type ContainerProps = {
  perPage: number
  setPerPage: (perPage: number) => void
  values: number[]
  label?: string
}

const Component = ({
  classes,
  perPage,
  setPerPage,
  values,
  label
}: Props): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPerPage(event.target.value as number)
  }
  const labelId = `PerPageSelect_${Date.now()}`

  return (
    <div className={classes.root}>
      <label className={classes.label} id={labelId}>
        {label || 'Rows per page'}
      </label>
      <Spacer direction='horizontal' size='3px' />
      <Select
        value={perPage}
        onChange={handleChange}
        variant='outlined'
        size='small'
        labelId={labelId}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  root: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.9rem'
  },
  label: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '5px'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as PerPageSelect }
export type { ContainerProps as PerPageSelectProps }
