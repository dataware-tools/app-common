import Box from "@material-ui/core/Box";
import React from "react";
import { ToolBar, ToolBarProps } from "../ToolBar";

export type PageToolBarProps = ToolBarProps;

export const PageToolBar = ({
  ...delegated
}: PageToolBarProps): JSX.Element => {
  return (
    <Box sx={{ overflow: "auto", padding: "0 0 3vh 0" }}>
      <ToolBar {...delegated} />
    </Box>
  );
};
