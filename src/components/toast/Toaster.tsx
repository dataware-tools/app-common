import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ToasterProps = ToastContainerProps;
export const Toaster = ({
  position,
  theme,
  progressStyle,
  limit,
  ...delegated
}: ToasterProps): JSX.Element => {
  const muiTheme = useTheme();
  return (
    <ToastContainer
      position={position ?? "bottom-left"}
      limit={limit ?? 3}
      theme={theme ?? "colored"}
      progressStyle={{
        backgroundColor: muiTheme.palette.grey[600],
        ...progressStyle,
      }}
      closeButton={<CloseIcon />}
      {...delegated}
    />
  );
};
