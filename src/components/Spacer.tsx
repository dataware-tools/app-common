import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
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
