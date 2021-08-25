import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

export const LoadingIndicator = (): JSX.Element => {
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
      <CircularProgress />
    </Box>
  );
};
