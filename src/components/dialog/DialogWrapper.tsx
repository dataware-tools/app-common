import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type DialogWrapperProps = BoxProps;

export const DialogWrapper = ({
  children,
  sx,
  ...delegated
}: DialogWrapperProps): JSX.Element => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", padding: "20px", ...sx }}
      {...delegated}
    >
      {children}
    </Box>
  );
};
