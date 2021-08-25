import Tab from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import React from "react";

export type TabBarProps = {
  tabNames: string[];
  onChange: (newValue: number) => void;
  value: number;
} & Omit<TabsProps, "value" | "onChange">;

export const TabBar = ({
  tabNames,
  onChange,
  value,
  ...delegated
}: TabBarProps): JSX.Element => {
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons
      {...delegated}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      value={value}
      sx={{
        borderRight: 3,
        borderColor: "divider",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      {tabNames.map((tabName) => (
        <Tab
          key={tabName}
          label={tabName}
          sx={{
            ":hover": {
              backgroundColor: "action.hover",
            },
          }}
        />
      ))}
    </Tabs>
  );
};
