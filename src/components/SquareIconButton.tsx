import Box from "@mui/material/Box";
import React, { MouseEventHandler, ReactNode } from "react";

export type SquareIconButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  icon: ReactNode;
};

export const SquareIconButton = ({
  icon,
  onClick,
  disabled,
}: SquareIconButtonProps): JSX.Element => {
  return (
    <Box
      sx={{
        all: "unset",
        alignItems: "center",
        cursor: disabled ? "unset" : "pointer",
        display: "flex",
        height: "40px",
        justifyContent: "center",
        opacity: disabled ? "50%" : "unset",
        width: "40px",
        "&:hover": {
          backgroundColor: disabled ? "unset" : "action.hover",
        },
        "&:focus": {
          border: disabled ? "unset" : "1px solid black",
        },
      }}
      onClick={disabled ? undefined : onClick}
      component="button"
    >
      {icon}
    </Box>
  );
};
