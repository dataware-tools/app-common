import { AutocompleteFreeSoloValueMapping } from "@mui/material";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import React, { useState } from "react";
import { MultiSelect, Option } from "./MultiSelect";

export default {
  component: MultiSelect,
  title: "MultiSelect",
} as ComponentMeta<typeof MultiSelect>;

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
      getOptionColor={(option) => option}
      freeSolo={false}
      fullWidth
      filterSelectedOptions
    />
  );
};

export const Default: ComponentStoryObj<typeof MultiSelect> = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option) => {
      if (option === null) {
        return "";
      } else if (typeof option === "string") {
        return String(option);
      } else if (typeof option === "number") {
        return String(option);
      } else if (typeof option === "object") {
        // @ts-expect-error to be fixed
        return String(option.name);
      } else {
        return "";
      }
    },
    getOptionColor: (option) => option,
    freeSolo: false,
    fullWidth: true,
    filterSelectedOptions: true,
  },
};

export const ColorMap: ComponentStoryObj<typeof MultiSelect> = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option) => {
      if (option === null) {
        return "";
      } else if (typeof option === "string") {
        return String(option);
      } else if (typeof option === "number") {
        return String(option);
      } else if (typeof option === "object") {
        // @ts-expect-error ignore check
        return String(option.name);
      } else {
        return "";
      }
    },
    // @ts-expect-error to be fixed
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

export const HashBasedColor: ComponentStoryObj<typeof MultiSelect> = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option) => {
      if (option === null) {
        return "";
      } else if (typeof option === "string") {
        return String(option);
      } else if (typeof option === "number") {
        return String(option);
      } else if (typeof option === "object") {
        // @ts-expect-error ignore check
        return String(option.name);
      } else {
        return "";
      }
    },
    // @ts-expect-error returning option type
    getOptionColor: <T extends Option, FreeSolo extends boolean>(
      option: T | AutocompleteFreeSoloValueMapping<FreeSolo>
    ) => {
      if (typeof option !== "string" && typeof option !== "number") {
        const hue = stringToHash(option.name) % 360;
        option.color = `hsl(${hue}, 50%, 80%)`;
      }
      return option;
    },
  },
};
