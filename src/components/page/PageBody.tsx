import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type PageBodyProps = BoxProps;

export const PageBody = ({
  children,
  sx,
  ...delegated
}: PageBodyProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: "3vw 5vw",
        ...sx,
      }}
      {...delegated}
    >
      {children}
    </Box>
  );
};
