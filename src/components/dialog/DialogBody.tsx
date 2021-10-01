import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type DialogBodyProps = BoxProps;

export const DialogBody = ({
  children,
  sx,
  ...delegated
}: DialogBodyProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: "0 2vw",
        ...sx,
      }}
      {...delegated}
    >
      {children}
    </Box>
  );
};
