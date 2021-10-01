import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type DialogMainProps = BoxProps;

export const DialogMain = ({
  children,
  sx,
  ...delegated
}: DialogMainProps): JSX.Element => {
  return (
    <Box sx={{ flex: 1, overflow: "auto", ...sx }} {...delegated}>
      {children}
    </Box>
  );
};
