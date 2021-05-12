import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import OutlinedInput from '@material-ui/core/OutlinedInput'

type Props = {
  searchText: string
  setSearchText: React.Dispatch<string>
} & Omit<ContainerProps, 'defaultValue'>

type ContainerProps = {
  onSearch: (searchText: string) => void
  defaultValue?: string
  value?: string
}

const Component = ({
  onSearch,
  searchText,
  setSearchText,
  value
}: Props): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(searchText)
      }}
    >
      <OutlinedInput
        size='small'
        placeholder='Search...'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              onClick={() => onSearch(searchText)}
              size='small'
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(event.target.value)
        }}
        value={value != null ? value : searchText}
      />
    </form>
  )
}

const Container = ({
  defaultValue,
  ...delegated
}: ContainerProps): JSX.Element => {
  const [searchText, setSearchText] = useState(defaultValue || '')
  return (
    <Component
      {...delegated}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  )
}

export { Container as SearchForm }
export type { ContainerProps as SearchFormProps }
