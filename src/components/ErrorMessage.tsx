import Alert from "@material-ui/core/Alert";
import AlertTitle from "@material-ui/core/AlertTitle";
import Box from "@material-ui/core/Box";
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
