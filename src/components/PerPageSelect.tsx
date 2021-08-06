import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select, { SelectChangeEvent } from '@material-ui/core/Select'
import themeInstance from '../theme'
import { makeStyles } from '@material-ui/styles'
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
  const handleChange = (event: SelectChangeEvent) => {
    setPerPage(parseInt(event.target.value, 10))
  }
  const labelId = `PerPageSelect_${Date.now()}`

  return (
    <div className={classes.root}>
      <label className={classes.label} id={labelId}>
        {label || 'Rows per page'}
      </label>
      <Spacer direction='horizontal' size='8px' />
      <Select
        value={perPage.toString()}
        onChange={handleChange}
        size='small'
        labelId={labelId}
        variant='outlined'
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
    flexDirection: 'row'
  },
  label: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '0.9rem',
    justifyContent: 'center'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as PerPageSelect }
export type { ContainerProps as PerPageSelectProps }
