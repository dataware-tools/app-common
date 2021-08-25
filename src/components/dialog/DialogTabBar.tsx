import Box from "@material-ui/core/Box";
import React from "react";
import { TabBar, TabBarProps } from "../TabBar";

export type DialogTabBarProps = TabBarProps;

export const DialogTabBar = ({
  ...delegated
}: DialogTabBarProps): JSX.Element => {
  return (
    <Box sx={{ flex: 0 }}>
      <TabBar {...delegated} />
    </Box>
  );
};
