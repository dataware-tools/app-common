import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput, {
  OutlinedInputProps,
} from "@material-ui/core/OutlinedInput";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

export type SearchFormPresentationProps = {
  searchText: string;
  setSearchText: React.Dispatch<string>;
} & Omit<SearchFormProps, "defaultValue">;

export type SearchFormProps = {
  onSearch: (searchText: string) => void;
  defaultValue?: string;
  value?: string;
  inputProps?: Omit<OutlinedInputProps, "onChange" | "value" | "endAdornment">;
};

export const SearchFormPresentation = ({
  onSearch,
  searchText,
  setSearchText,
  value,
  inputProps,
}: SearchFormPresentationProps): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchText);
      }}
    >
      <OutlinedInput
        size="small"
        placeholder="Search..."
        {...inputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => onSearch(searchText)}
              size="small"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(event.target.value);
        }}
        value={value != null ? value : searchText}
      />
    </form>
  );
};

export const SearchForm = ({
  defaultValue,
  ...delegated
}: SearchFormProps): JSX.Element => {
  const [searchText, setSearchText] = useState(defaultValue || "");
  return (
    <SearchFormPresentation
      {...delegated}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
};
