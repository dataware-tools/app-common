import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

export type TextCenteringSpanProps = { children: ReactNode };

export const TextCenteringSpan = ({
  children,
}: TextCenteringSpanProps): JSX.Element => {
  return (
    <Box
      component="span"
      sx={{ paddingTop: "0.1rem" }}
      // See: https://www.w3.org/TR/wai-aria-1.1/#none
      role="none presentation"
    >
      {children}
    </Box>
  );
};
