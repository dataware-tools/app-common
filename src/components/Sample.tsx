import Box from "@mui/material/Box";
import React from "react";
import { NoticeableLetters } from "./NoticeableLetters";

export type SamplePresentationProps = SampleProps;

export type SampleProps = {
  sample: string;
};

export const SamplePresentation = ({
  sample,
}: SamplePresentationProps): JSX.Element => {
  return (
    <Box role="main" sx={{ ":hover": { backgroundColor: "action.hover" } }}>
      <NoticeableLetters>{sample}</NoticeableLetters>
    </Box>
  );
};

export const Sample = ({ ...delegated }: SampleProps): JSX.Element => {
  return <SamplePresentation {...delegated} />;
};
