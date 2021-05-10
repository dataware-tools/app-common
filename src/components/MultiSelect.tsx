import React, { SyntheticEvent, useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { makeStyles } from '@material-ui/core/styles'
import LoadingButton from '@material-ui/lab/LoadingButton'
import Autocomplete, {
  AutocompleteCloseReason,
  AutocompleteProps
} from '@material-ui/core/Autocomplete'
import ClearIcon from '@material-ui/icons/Clear'
import themeInstance from 'theme'
import { TextField } from '@material-ui/core'

type Props<
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = {
  styles: ReturnType<typeof useStyles>
  saveButtonId: string
  haveSaveButton: boolean
  isSaving: boolean
  isSelectFocused: boolean
  isSelectOpen: boolean
  onClickAway: () => void
  onClickSaveButton: () => void
  onCloseSelect: (
    e: SyntheticEvent,
    reason: AutocompleteCloseReason
  ) => Promise<void>
  onFocusSelect: () => void
  onOpenSelect: () => void
} & AutocompleteProps<T, true, DisableClearable, FreeSolo>

type ContainerProps<
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = {
  onSave?: () => Promise<void> | void
  onFocusOut?: () => Promise<void> | void
  saveOnFocusOut?: boolean
  options: T[]
  disableClearable?: DisableClearable
  freeSolo?: FreeSolo
} & Partial<AutocompleteProps<T, true, DisableClearable, FreeSolo>>

const selectedItemStyleBase = {
  backgroundColor: themeInstance.palette.grey[300],
  borderRadius: '2px' as const,
  boxSizing: 'border-box' as const,
  fontSize: '85%' as const,
  margin: '2px 4px 2px 0px' as const,
  overflow: 'hidden' as const,
  textOverflow: 'ellipsis' as const,
  whiteSpace: 'nowrap' as const
}

const Component = <
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  value,
  getOptionLabel,
  styles,
  saveButtonId,
  haveSaveButton,
  isSelectFocused,
  isSelectOpen,
  isSaving,
  onClickAway,
  onClickSaveButton,
  onCloseSelect,
  onFocusSelect,
  onOpenSelect,
  renderInput: _unUsed,
  ...delegated
}: Props<T, DisableClearable, FreeSolo>): JSX.Element => {
  const SaveButton = () => {
    return (
      <LoadingButton
        id={saveButtonId}
        pending={isSaving}
        className={styles.saveButton}
        onClick={onClickSaveButton}
      >
        Save
      </LoadingButton>
    )
  }

  return isSelectFocused ? (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={styles.selectContainer}>
        <Autocomplete
          {...delegated}
          value={value}
          multiple
          open={isSelectOpen}
          onOpen={onOpenSelect}
          onClose={onCloseSelect}
          ChipProps={{
            style: { ...selectedItemStyleBase },
            deleteIcon: <ClearIcon />
          }}
          size='small'
          renderInput={(params) => <TextField {...params} autoFocus />}
          getOptionLabel={getOptionLabel}
        />
        {haveSaveButton ? <SaveButton /> : null}
      </div>
    </ClickAwayListener>
  ) : (
    <div
      className={
        value && value.length > 0
          ? styles.deactiveSelect
          : styles.deactiveEmptySelect
      }
      onClick={onFocusSelect}
    >
      {value && value.length > 0 ? (
        value.map((option, index) => {
          return (
            <div key={index} className={styles.selectedItem}>
              {getOptionLabel
                ? // @ts-expect-error I don't know how to resolve this error
                  getOptionLabel(option)
                : // @ts-expect-error I don't know how to resolve this error
                  option.label}
            </div>
          )
        })
      ) : (
        <div>Select...</div>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  deactiveSelect: {
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '6px',
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  },
  deactiveEmptySelect: {
    alignItems: 'center',
    borderRadius: '4px',
    color: theme.palette.text.disabled,
    cursor: 'pointer',
    display: 'flex',
    height: '40px',
    paddingLeft: '1rem',
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  },
  selectContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  select: {
    width: '100%'
  },
  selectedItem: { ...selectedItemStyleBase, padding: '2px 6px' },
  saveButton: { marginLeft: '5px' }
}))

const Container = <
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  value,
  onSave,
  onFocusOut,
  saveOnFocusOut = true,
  ...delegated
}: ContainerProps<T, DisableClearable, FreeSolo>): JSX.Element => {
  const styles = useStyles()
  const [isSelectFocused, setIsSelectFocused] = useState(false)
  const [isSelectOpen, setIsSelectOpen] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const saveButtonId = `MultiSelect-SaveButton-value-${JSON.stringify(value)}`
  const haveSaveButton = onSave != null

  const save = async () => {
    if (onSave) {
      setIsSaving(true)
      await onSave()
      setIsSaving(false)
    }
  }

  const onOpenSelect = () => setIsSelectOpen(true)
  const onCloseSelect = async (
    e: SyntheticEvent,
    reason: AutocompleteCloseReason
  ) => {
    if (reason === 'escape' || reason === 'toggleInput' || reason === 'blur') {
      setIsSelectOpen(false)
    }
    const saveButton = document.getElementById(saveButtonId)

    // @ts-expect-error I don't know how to resolve this
    if (saveButton && e.relatedTarget === saveButton) {
      await save()
      setIsSelectFocused(false)
    }
  }

  const onFocusSelect = () => {
    setIsSelectFocused(true)
    setIsSelectOpen(true)
  }

  const onClickAway = () => {
    if (saveOnFocusOut) {
      save()
    }
    if (onFocusOut) {
      onFocusOut()
    }
    setIsSelectFocused(false)
  }

  const onClickSaveButton = async () => {
    await save()
    setIsSelectFocused(false)
  }

  return (
    <Component
      styles={styles}
      {...delegated}
      value={value}
      onClickAway={onClickAway}
      onClickSaveButton={onClickSaveButton}
      onCloseSelect={onCloseSelect}
      onOpenSelect={onOpenSelect}
      onFocusSelect={onFocusSelect}
      saveButtonId={saveButtonId}
      isSaving={isSaving}
      isSelectFocused={isSelectFocused}
      isSelectOpen={isSelectOpen}
      haveSaveButton={haveSaveButton}
      renderInput={() => <div>this is dummy</div>}
    />
  )
}

export { Container as MultiSelect }
export { createFilterOptions } from '@material-ui/core/Autocomplete'
export type { ContainerProps as MultiSelectProps }
