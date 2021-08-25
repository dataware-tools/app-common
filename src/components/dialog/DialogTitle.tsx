import Box from "@material-ui/core/Box";
import React, { ReactNode } from "react";

export type DialogTitleProps = { children: ReactNode };

export const DialogTitle = ({ children }: DialogTitleProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        fontSize: "1.5rem",
        padding: "2vh 1vw",
      }}
    >
      {children}
    </Box>
  );
};
