import Box from "@mui/material/Box";
import React from "react";

export type ToolBarProps = {
  right?: React.ReactNode;
  left?: React.ReactNode;
  role?: string;
};

export const ToolBar = ({ right, left, role }: ToolBarProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexShrink: 0,
        justifyContent: "space-between",
      }}
      role={role}
    >
      <Box
        sx={{ alignItems: "center", display: "flex", textAlign: "left" }}
        role={left ? undefined : "none presentation"}
      >
        {left}
      </Box>
      <Box
        sx={{ alignItems: "center", display: "flex", textAlign: "right" }}
        role={right ? undefined : "none presentation"}
      >
        {right}
      </Box>
    </Box>
  );
};
