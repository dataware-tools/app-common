import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

export type DialogSubTitleProps = { children: ReactNode };

export const DialogSubTitle = ({
  children,
}: DialogSubTitleProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        fontSize: "1.3rem",
        padding: "1vh 0",
      }}
      role="heading"
    >
      {children}
    </Box>
  );
};
