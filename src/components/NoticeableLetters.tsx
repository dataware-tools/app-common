import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type NoticeableLettersProps = BoxProps;

export const NoticeableLetters = ({
  sx,
  ...delegated
}: NoticeableLettersProps): JSX.Element => {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: [
          "Oxanium",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "Roboto",
          "Noto Sans JP",
          "sans-serif",
        ].join(","),
        ...sx,
      }}
      {...delegated}
    />
  );
};
