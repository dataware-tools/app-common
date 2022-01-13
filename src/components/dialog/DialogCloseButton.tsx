import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import React from "react";

export type DialogCloseButtonProps = { onClick: () => void };
export const DialogCloseButton = ({
  onClick,
}: DialogCloseButtonProps): JSX.Element => {
  return (
    <Box sx={{ position: "absolute", right: 15, top: -10 }}>
      <Box
        sx={{
          all: "unset",
          alignItems: "center",
          backgroundColor: "white",
          border: 1,
          borderColor: "grey[600]",
          borderRadius: "50%",
          color: "grey[600]",
          cursor: "pointer",
          display: "flex",
          height: 30,
          justifyContent: "center",
          position: "fixed",
          width: 30,
        }}
        onClick={onClick}
        component="button"
      >
        <CloseIcon />
      </Box>
    </Box>
  );
};
