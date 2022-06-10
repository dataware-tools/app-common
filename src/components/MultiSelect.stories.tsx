import { AutocompleteFreeSoloValueMapping } from "@mui/material";
import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { MultiSelect, Option } from "./MultiSelect";

export default {
  component: MultiSelect,
  title: "MultiSelect",
};

const Template: ComponentStory<typeof MultiSelect> = (args) => {
  const [selected, setSelected] = useState([args.options[0]]);
  return (
    <MultiSelect
      options={args.options}
      value={selected}
      onChange={(_, newValue) => {
        setSelected([...newValue]);
      }}
      getOptionLabel={(option) => option.name}
      getOptionColor={args.getOptionColor}
      freeSolo={false}
      fullWidth
      filterSelectedOptions
    />
  );
};

export const Controlled = Template.bind({});
Controlled.args = {
  options: [
    { name: "test1", id: 1, color: "#BACDFE" },
    { name: "test2", id: 2, color: "#ABCDEF" },
    { name: "test3", id: 3, color: "#FEDCBA" },
  ],
  getOptionColor: (option) => option,
};

export const ColorMap = Template.bind({});
ColorMap.args = {
  options: [
    { name: "test1", id: 1 },
    { name: "test2", id: 2 },
    { name: "test3", id: 3 },
  ],
  getOptionColor: <T extends Option, FreeSolo extends boolean>(
    option: T | AutocompleteFreeSoloValueMapping<FreeSolo>
  ) => {
    const colorMap = {
      test1: "green",
      test2: "yellow",
      test3: "blue",
    };
    if (typeof option !== "string" && typeof option !== "number") {
      if (colorMap && Object.keys(colorMap).includes(option.name ?? "")) {
        option.color = colorMap[option.name ?? ""];
      }
    }
    return option;
  },
};

const stringToHash = (string: string | undefined) => {
  if (!string) return 0;
  let hash = 0;

  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
};

export const HashBasedColor = Template.bind({});
HashBasedColor.args = {
  options: [
    { name: "admin", id: 1 },
    { name: "user", id: 2 },
    { name: "guest", id: 3 },
  ],
  getOptionColor: <T extends Option, FreeSolo extends boolean>(
    option: T | AutocompleteFreeSoloValueMapping<FreeSolo>
  ) => {
    if (typeof option !== "string" && typeof option !== "number") {
      const hue = stringToHash(option.name) % 360;
      option.color = `hsl(${hue}, 50%, 80%)`;
    }
    return option;
  },
};
