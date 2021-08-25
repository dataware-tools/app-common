import Box from "@material-ui/core/Box";
import React from "react";

export type ToolBarProps = {
  right?: React.ReactNode;
  left?: React.ReactNode;
};

export const ToolBar = ({ right, left }: ToolBarProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexShrink: 0,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ alignItems: "center", display: "flex", textAlign: "left" }}>
        {left}
      </Box>
      <Box sx={{ alignItems: "center", display: "flex", textAlign: "right" }}>
        {right}
      </Box>
    </Box>
  );
};
