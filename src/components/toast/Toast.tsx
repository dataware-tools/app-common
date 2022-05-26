import Alert, { AlertProps } from "@mui/material/Alert";
import React from "react";

export type ToastProps = AlertProps;
export const Toast = ({ sx, ...delegated }: ToastProps): JSX.Element => {
  return (
    <Alert
      icon={false}
      sx={{ backgroundColor: "inherit", color: "inherit", ...sx }}
      {...delegated}
    />
  );
};
