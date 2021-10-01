import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type PageContainerProps = BoxProps;

export const PageContainer = ({
  children,
  sx,
  ...delegated
}: PageContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        overflow: "auto",
        ...sx,
      }}
      {...delegated}
    >
      {children}
    </Box>
  );
};
