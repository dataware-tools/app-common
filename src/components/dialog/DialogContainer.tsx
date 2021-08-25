import Box, { BoxProps } from "@material-ui/core/Box";
import React from "react";

export type DialogContainerProps = BoxProps;

export const DialogContainer = ({
  children,
  sx,
  ...delegated
}: DialogContainerProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", ...sx }} {...delegated}>
      {children}
    </Box>
  );
};
