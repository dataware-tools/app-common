import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

export type TextCenteringSpanProps = { children: ReactNode };

export const TextCenteringSpan = ({
  children,
}: TextCenteringSpanProps): JSX.Element => {
  return (
    <Box component="span" sx={{ paddingTop: "0.1rem" }}>
      {children}
    </Box>
  );
};
