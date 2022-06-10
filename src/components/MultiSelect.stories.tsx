import React, { useState } from "react";
import { MultiSelect } from "./MultiSelect";

export default {
  component: MultiSelect,
  title: "MultiSelect",
};

// const defaultOptions = [
//   {name: "test1", id: 1, color: "#BACDFE"},
//   {name: "test2", id: 2, color: "#ABCDEF"},
//   {name: "test3", id: 3, color: "#FEDCBA"},
// ];

// export const Controlled = (): JSX.Element => {
//   const [selected, setSelected] = useState([defaultOptions[0]]);
//   return (
//     <MultiSelect
//       options={defaultOptions}
//       value={selected}
//       onChange={(_, newValue) => {
//         setSelected([...newValue]);
//       }}
//       getOptionLabel={(option) => option.name}
//       freeSolo={false}
//       fullWidth
//       filterSelectedOptions
//     />
//   );
// };

const MultiSelectTemplate = ({ options, colorMap }): JSX.Element => {
  const [selected, setSelected] = useState([options[0]]);
  return (
    <MultiSelect
      options={options}
      value={selected}
      colorMap={colorMap}
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

export const Controlled = MultiSelectTemplate.bind({});
Controlled.args = {
  options: [
    { name: "test1", id: 1, color: "#BACDFE" },
    { name: "test2", id: 2, color: "#ABCDEF" },
    { name: "test3", id: 3, color: "#FEDCBA" },
  ],
};

export const ColorMap = MultiSelectTemplate.bind({});
ColorMap.args = {
  options: [
    { name: "test1", id: 1 },
    { name: "test2", id: 2 },
    { name: "test3", id: 3 },
  ],
  colorMap: {
    test1: "red",
    test2: "yellow",
    test3: "blue",
  },
};
