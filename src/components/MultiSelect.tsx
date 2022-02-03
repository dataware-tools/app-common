import ClearIcon from "@mui/icons-material/Clear";
import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete, {
  AutocompleteCloseReason,
  AutocompleteProps,
} from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TextField from "@mui/material/TextField";
import React, { SyntheticEvent, useState } from "react";
import themeInstance from "../theme";

type Option = { color?: string; label?: string };
export type MultiSelectPresentationProps<
  T extends Option,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = {
  saveButtonId: string;
  haveSaveButton: boolean;
  isSaving: boolean;
  isSelectFocused: boolean;
  isSelectOpen: boolean;
  onClickAway: () => void;
  onClickSaveButton: () => void;
  onCloseSelect: (
    e: SyntheticEvent,
    reason: AutocompleteCloseReason
  ) => Promise<void>;
  onFocusSelect: () => void;
  onOpenSelect: () => void;
} & Omit<AutocompleteProps<T, true, DisableClearable, FreeSolo>, "renderInput">;

export type MultiSelectProps<
  T extends Option,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = {
  onSave?: () => Promise<void> | void;
  onFocusOut?: () => Promise<void> | void;
  saveOnFocusOut?: boolean;
  options: T[];
  disableClearable?: DisableClearable;
  freeSolo?: FreeSolo;
} & Partial<AutocompleteProps<T, true, DisableClearable, FreeSolo>>;

const selectedItemStyleBase = {
  backgroundColor: themeInstance.palette.grey[300],
  borderRadius: "2px" as const,
  boxSizing: "border-box" as const,
  fontSize: "85%" as const,
  margin: "2px 4px 2px 0px" as const,
  overflow: "hidden" as const,
  textOverflow: "ellipsis" as const,
  whiteSpace: "nowrap" as const,
};

export const MultiSelectPresentation = <
  T extends Option,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  value,
  getOptionLabel,
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
  ...delegated
}: MultiSelectPresentationProps<
  T,
  DisableClearable,
  FreeSolo
>): JSX.Element => {
  const SaveButton = () => {
    return (
      <LoadingButton
        id={saveButtonId}
        loading={isSaving}
        sx={{ marginLeft: "5px" }}
        onClick={onClickSaveButton}
      >
        Save
      </LoadingButton>
    );
  };
  const isValueExist = value && value.length > 0;

  return isSelectFocused ? (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Autocomplete
          {...delegated}
          value={value}
          multiple
          open={isSelectOpen}
          onOpen={onOpenSelect}
          onClose={onCloseSelect}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={getOptionLabel ? getOptionLabel(option) : option}
                {...getTagProps({ index })}
                style={{
                  ...selectedItemStyleBase,
                  ...(option.color ? { backgroundColor: option.color } : {}),
                }}
                deleteIcon={<ClearIcon />}
                size="small"
                key={index}
              />
            ))
          }
          size="small"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          renderInput={(params) => <TextField {...params} autoFocus />}
          getOptionLabel={getOptionLabel}
        />
        {haveSaveButton ? <SaveButton /> : null}
      </Box>
    </ClickAwayListener>
  ) : (
    <Box
      sx={{
        alignItems: "center",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        flexWrap: "wrap",
        padding: "6px",
        paddingLeft: isValueExist ? undefined : "1rem",
        color: isValueExist ? undefined : "text.disabled",
        height: isValueExist ? undefined : "40px",
        width: "100%",
        ":hover": {
          backgroundColor: "action.hover",
        },
      }}
      onClick={onFocusSelect}
      role="combobox"
    >
      {isValueExist ? (
        value.map((option, index) => {
          return (
            <Box
              key={index}
              sx={{
                ...selectedItemStyleBase,
                padding: "2px 6px",
                // @ts-expect-error I dont know how to resolve this error...
                ...(option.color ? { backgroundColor: option.color } : {}),
              }}
            >
              {getOptionLabel
                ? // @ts-expect-error I don't know how to resolve this error
                  getOptionLabel(option)
                : // @ts-expect-error I don't know how to resolve this error
                  option.label}
            </Box>
          );
        })
      ) : (
        <div>Select...</div>
      )}
    </Box>
  );
};

export const MultiSelect = <
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  value,
  onSave,
  onFocusOut,
  saveOnFocusOut = true,
  ...delegated
}: MultiSelectProps<T, DisableClearable, FreeSolo>): JSX.Element => {
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const saveButtonId = `MultiSelect-SaveButton-value-${JSON.stringify(value)}`;
  const haveSaveButton = onSave != null;

  const save = async () => {
    if (onSave) {
      setIsSaving(true);
      await onSave();
      setIsSaving(false);
    }
  };

  const onOpenSelect = () => setIsSelectOpen(true);
  const onCloseSelect = async (
    e: SyntheticEvent,
    reason: AutocompleteCloseReason
  ) => {
    if (reason === "escape" || reason === "toggleInput" || reason === "blur") {
      setIsSelectOpen(false);
    }
    const saveButton = document.getElementById(saveButtonId);

    // @ts-expect-error I don't know how to resolve this
    if (saveButton && e.relatedTarget === saveButton) {
      await save();
      setIsSelectFocused(false);
    }
  };

  const onFocusSelect = () => {
    setIsSelectFocused(true);
    setIsSelectOpen(true);
  };

  const onClickAway = () => {
    if (saveOnFocusOut) {
      save();
    }
    if (onFocusOut) {
      onFocusOut();
    }
    setIsSelectFocused(false);
  };

  const onClickSaveButton = async () => {
    await save();
    setIsSelectFocused(false);
  };

  return (
    <MultiSelectPresentation
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
    />
  );
};

export { createFilterOptions as createFilterOptionsForMultiSelect } from "@mui/material/Autocomplete";
