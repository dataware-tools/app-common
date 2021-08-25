import Button from "@material-ui/core/Button";
import AddCircle from "@material-ui/icons/AddCircle";
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
