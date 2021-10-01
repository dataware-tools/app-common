import Dialog, { DialogProps } from "@mui/material/Dialog";
import React, { ReactNode } from "react";
import { DialogBody } from "./dialog/DialogBody";
import { DialogContainer } from "./dialog/DialogContainer";
import { DialogMain } from "./dialog/DialogMain";
import { DialogTitle } from "./dialog/DialogTitle";
import { DialogToolBar } from "./dialog/DialogToolBar";
import { DialogWrapper } from "./dialog/DialogWrapper";

export type ConfirmModalBaseProps = {
  open: boolean;
  body?: ReactNode;
  title?: ReactNode;
  height?: string;
  buttons: ReactNode;
} & Omit<DialogProps, "onClose">;

export const ConfirmModalBase = ({
  open,
  body,
  title,
  height,
  buttons,
  ...dialogProps
}: ConfirmModalBaseProps): JSX.Element => {
  return (
    <Dialog {...dialogProps} open={open}>
      <DialogWrapper>
        <DialogContainer height={height}>
          <DialogBody padding="0">
            {title ? (
              typeof title === "string" ? (
                <DialogTitle>{title}</DialogTitle>
              ) : (
                title
              )
            ) : null}
            <DialogMain>
              {body ? (
                typeof body === "string" ? (
                  <DialogBody>{body}</DialogBody>
                ) : (
                  body
                )
              ) : null}
            </DialogMain>
            <DialogToolBar right={buttons} />
          </DialogBody>
        </DialogContainer>
      </DialogWrapper>
    </Dialog>
  );
};
