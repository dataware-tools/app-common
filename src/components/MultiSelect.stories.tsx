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

type MultiSelectStory = ComponentStoryObj<
  typeof MultiSelect<Option, boolean, boolean>
>;

export const Default: MultiSelectStory = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option: Option) => {
      if (typeof option !== "string" && typeof option !== "number") {
        return String(option.name);
      } else {
        return "";
      }
    },
    getOptionColor: (option) => {
      return option;
    },
  },
};

export const ColorMap: MultiSelectStory = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option) => {
      if (typeof option !== "string" && typeof option !== "number") {
        return String(option.name);
      } else {
        return "";
      }
    },
    getOptionColor: (option) => {
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

export const HashBasedColor: MultiSelectStory = {
  args: {
    value: [{ name: "test1" }],
    options: [
      { name: "test1", id: 1, color: "#BACDFE" },
      { name: "test2", id: 2, color: "#ABCDEF" },
      { name: "test3", id: 3, color: "#FEDCBA" },
    ],
    getOptionLabel: (option) => {
      if (typeof option !== "string" && typeof option !== "number") {
        return String(option.name);
      } else {
        return "";
      }
    },
    getOptionColor: (option) => {
      if (typeof option !== "string" && typeof option !== "number") {
        const hue = stringToHash(option.name) % 360;
        option.color = `hsl(${hue}, 50%, 80%)`;
      }
      return option;
    },
  },
};
