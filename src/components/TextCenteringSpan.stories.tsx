import AddCircle from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import React from "react";
import { TextCenteringSpan } from "./TextCenteringSpan";

export default {
  component: TextCenteringSpan,
  title: "TextCenteringSpan",
};

export const Default = (): JSX.Element => (
  <>
    <span>centering</span>
    <br />
    <Button startIcon={<AddCircle />}>
      <TextCenteringSpan>test</TextCenteringSpan>
    </Button>
    <br />
    <span>not centering</span>
    <br />
    <Button startIcon={<AddCircle />}>test</Button>
  </>
);
