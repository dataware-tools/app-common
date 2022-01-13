import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import React, { useEffect, useState } from "react";
import { usePrevious } from "../utils";

export type SearchFormPresentationProps = Omit<SearchFormProps, "defaultValue">;

export type SearchFormProps = {
  onSearch: (searchText?: string) => void;
  onChange?: (newSearchText: string) => void;
  defaultValue?: string;
  value?: string;
  inputProps?: Omit<OutlinedInputProps, "onChange" | "value" | "endAdornment">;
};

export const SearchFormPresentation = ({
  onSearch,
  onChange,
  value,
  inputProps,
}: SearchFormPresentationProps): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
      role="search"
    >
      <OutlinedInput
        size="small"
        placeholder="Search..."
        inputProps={{ role: "searchbox" }}
        {...inputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => onSearch(value)} size="small">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange && onChange(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export const SearchForm = ({
  defaultValue,
  value,
  onChange,
  ...delegated
}: SearchFormProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>(defaultValue || "");
  const prevDefaultValue = usePrevious(defaultValue);
  useEffect(() => {
    if (defaultValue !== prevDefaultValue) {
      setSearchText(defaultValue || "");
    }
  }, [defaultValue, prevDefaultValue]);

  return (
    <SearchFormPresentation
      {...delegated}
      value={value != null ? value : searchText}
      onChange={onChange || setSearchText}
    />
  );
};
