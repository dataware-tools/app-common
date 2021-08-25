import Box, { BoxProps } from "@material-ui/core/Box";
import React from "react";

export type PageMainProps = BoxProps;

export const PageMain = ({
  children,
  sx,
  ...delegated
}: PageMainProps): JSX.Element => {
  return (
    <Box sx={{ flex: 1, overflow: "auto", ...sx }} {...delegated}>
      {children}
    </Box>
  );
};
