import Box from "@mui/material/Box";
import React from "react";
import { ToolBar, ToolBarProps } from "../ToolBar";

export type DialogToolBarProps = ToolBarProps;

export const DialogToolBar = ({
  ...delegated
}: DialogToolBarProps): JSX.Element => {
  return (
    <Box sx={{ padding: "2vh 0 0 0" }}>
      <ToolBar {...delegated} />
    </Box>
  );
};
