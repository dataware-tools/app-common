import Alert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import React from "react";

export type ErrorMessageProps = {
  reason?: string;
  instruction?: string;
  variant?: "default" | "transparent";
  alertProps?: AlertProps;
};

export const ErrorMessage = ({
  reason,
  instruction,
  variant,
  alertProps,
}: ErrorMessageProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        overflow: "auto",
        width: "100%",
      }}
    >
      <Alert
        {...alertProps}
        severity={alertProps?.severity ?? "error"}
        sx={{
          wordBreak: "break-all",
          ...(variant === "transparent"
            ? {
                backgroundColor: "inherit",
                color: "inherit",
              }
            : undefined),
          ...alertProps?.sx,
        }}
        icon={alertProps?.icon ?? false}
      >
        {variant !== "transparent" ? <AlertTitle>Error</AlertTitle> : null}
        {reason ? <div>{reason}</div> : null}
        {instruction ? (
          <div>
            <strong>{instruction}</strong>
          </div>
        ) : null}
      </Alert>
    </Box>
  );
};
