import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import React from "react";

export type ErrorMessageProps = {
  reason?: string;
  instruction?: string;
};

export const ErrorMessage = ({
  reason,
  instruction,
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
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
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
