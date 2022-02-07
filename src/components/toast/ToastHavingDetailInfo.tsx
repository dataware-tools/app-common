import Button, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React, { useState, ReactNode } from "react";
import { DialogCloseButton } from "../dialog/DialogCloseButton";
import { DialogWrapper } from "../dialog/DialogWrapper";
import { Toast, ToastProps } from "./Toast";

export type ToastHavingDetailModalProps = {
  detailContent: ReactNode;
  detailButtonProps?: Omit<ButtonProps, "onClick">;
} & Omit<ToastProps, "action">;
export const ToastHavingDetailModal = ({
  detailContent,
  detailButtonProps,
  ...delegated
}: ToastHavingDetailModalProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Toast
        {...delegated}
        action={
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            color="inherit"
            variant="text"
            {...detailButtonProps}
          >
            {detailButtonProps?.children ?? "Detail"}
          </Button>
        }
      />
      <Dialog open={open} onClose={() => setOpen(false)} role="alertdialog">
        <DialogWrapper>
          <DialogCloseButton onClick={() => setOpen(false)} />
          {detailContent}
        </DialogWrapper>
      </Dialog>
    </>
  );
};
