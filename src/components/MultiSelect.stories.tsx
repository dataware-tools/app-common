import React, { useState } from "react";
import { MultiSelect } from "./MultiSelect";

export default {
  component: MultiSelect,
  title: "MultiSelect",
};

const defaultOptions = [
  { name: "test1", id: 1, color: "#BACDFE" },
  { name: "test2", id: 2, color: "#ABCDEF" },
  { name: "test3", id: 3, color: "#FEDCBA" },
];

export const Controlled = (): JSX.Element => {
  const [selected, setSelected] = useState([defaultOptions[0]]);
  return (
    <MultiSelect
      options={defaultOptions}
      value={selected}
      onChange={(_, newValue) => {
        setSelected([...newValue]);
      }}
      getOptionLabel={(option) => option.name}
      freeSolo={false}
      fullWidth
      filterSelectedOptions
    />
  );
};
