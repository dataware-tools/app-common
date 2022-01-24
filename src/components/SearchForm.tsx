import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { usePrevious } from "../utils";
import { Spacer } from "./Spacer";

export type SearchFormPresentationProps = Omit<
  SearchFormProps,
  "defaultValue" | "searchHistoryKey"
> & { searchHistory?: string[] };

type SearchFormPropsBase = {
  onSearch: (searchText?: string) => void;
  onChange?: (newSearchText: string) => void;
  defaultValue?: string;
  value?: string;
  inputProps?: Omit<OutlinedInputProps, "onChange" | "value" | "endAdornment">;
};

export type SearchFormProps = SearchFormPropsBase &
  (
    | {
        enableSearchHistory: true;
        searchHistoryKey: string;
      }
    | {
        enableSearchHistory?: false;
        searchHistoryKey?: never;
      }
  );

export const SearchFormPresentation = ({
  enableSearchHistory,
  searchHistory,
  onSearch,
  onChange,
  value,
  inputProps,
}: SearchFormPresentationProps): JSX.Element => {
  const textFieldProps: TextFieldProps = {
    variant: "outlined",
    size: "small",
    placeholder: "Search...",
  };

  const SearchIconButton = ({ onClick }: { onClick: () => void }) => (
    <InputAdornment position="end">
      <IconButton edge="end" onClick={onClick} size="small">
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
      role="search"
    >
      {enableSearchHistory ? (
        <Autocomplete
          freeSolo
          options={searchHistory as NonNullable<typeof searchHistory>}
          onChange={(_, value, reason) => {
            onChange && onChange(value || "");
            if (reason === "selectOption") {
              onSearch(value || undefined);
            }
          }}
          filterSelectedOptions
          value={value}
          renderOption={(props, option) => (
            <li {...props}>
              <AccessTimeIcon />
              <Spacer direction="horizontal" size={2} />
              {option}
            </li>
          )}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                {...textFieldProps}
                inputProps={{ ...params.inputProps, role: "searchbox" }}
                InputProps={{
                  ...params.InputProps,
                  ...inputProps,
                  endAdornment: (
                    <SearchIconButton onClick={() => onSearch(value)} />
                  ),
                }}
              />
            );
          }}
        />
      ) : (
        <TextField
          {...textFieldProps}
          inputProps={{ role: "searchbox" }}
          InputProps={{
            ...inputProps,
            endAdornment: <SearchIconButton onClick={() => onSearch(value)} />,
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(event.target.value);
          }}
          value={value}
        />
      )}
    </form>
  );
};

export const SearchForm = ({
  enableSearchHistory,
  searchHistoryKey,
  defaultValue,
  value,
  onChange,
  onSearch: propsOnSearch,
  ...delegated
}: SearchFormProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>(defaultValue || "");
  const [searchHistory, setSearchHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem(searchHistoryKey || "") || "[]")
  );
  const prevDefaultValue = usePrevious(defaultValue);
  useEffect(() => {
    if (defaultValue !== prevDefaultValue) {
      setSearchText(defaultValue || "");
    }
  }, [defaultValue, prevDefaultValue]);

  const onSearch: SearchFormPresentationProps["onSearch"] = async (
    searchText
  ) => {
    await propsOnSearch(searchText);

    if (!searchText || !enableSearchHistory) {
      return;
    }

    setSearchHistory((prev) => {
      const index = prev.indexOf(searchText);
      const newSearchHistory = [...prev];
      if (index !== -1) {
        newSearchHistory.splice(index, 1);
        newSearchHistory.unshift(prev[index]);
      } else {
        newSearchHistory.unshift(searchText);
        if (newSearchHistory.length > 100) {
          newSearchHistory.pop();
        }
      }

      localStorage.setItem(
        searchHistoryKey || "",
        JSON.stringify(newSearchHistory)
      );

      return newSearchHistory;
    });
  };

  return (
    <SearchFormPresentation
      {...delegated}
      onSearch={onSearch}
      enableSearchHistory={enableSearchHistory}
      searchHistory={searchHistory}
      value={value != null ? value : searchText}
      onChange={onChange || setSearchText}
    />
  );
};
