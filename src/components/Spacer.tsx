import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";

export type SpacerPresentationProps = { width: string; height: string };
export type SpacerProps = {
  size: number | string;
  direction?: "vertical" | "horizontal";
};
export const SpacerPresentation = ({
  width,
  height,
}: SpacerPresentationProps): JSX.Element => {
  return (
    <Box
      component="span"
      sx={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
      // See: https://www.w3.org/TR/wai-aria-1.1/#none
      role="none presentation"
    />
  );
};

export const Spacer = ({
  size = 1,
  direction = "vertical",
}: SpacerProps): JSX.Element => {
  const theme = useTheme();
  const fixedSize = typeof size === "number" ? theme.spacing(size) : size;
  const width = direction === "vertical" ? "0px" : fixedSize;
  const height = direction === "horizontal" ? "0px" : fixedSize;

  return <SpacerPresentation width={width} height={height} />;
};
