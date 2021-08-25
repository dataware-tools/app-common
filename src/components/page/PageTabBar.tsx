import Box from "@material-ui/core/Box";
import React from "react";
import { TabBar, TabBarProps } from "../TabBar";

export type PageTabBarProps = TabBarProps;

export const PageTabBar = ({ ...delegated }: PageTabBarProps): JSX.Element => {
  return (
    <Box sx={{ flex: 0 }}>
      <TabBar {...delegated} />
    </Box>
  );
};
