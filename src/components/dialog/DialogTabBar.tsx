import Box from "@mui/material/Box";
import React from "react";
import { TabBar, TabBarProps } from "../TabBar";

export type DialogTabBarProps = TabBarProps;

export const DialogTabBar = ({
  ...delegated
}: DialogTabBarProps): JSX.Element => {
  return (
    <Box sx={{ flex: 0 }} role="none presentation">
      <TabBar {...delegated} />
    </Box>
  );
};
