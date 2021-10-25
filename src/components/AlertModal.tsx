import Button, { ButtonProps } from "@mui/material/Button";
import React, { useState } from "react";
import { ConfirmModalBase, ConfirmModalBaseProps } from "./ConfirmModalBase";

export type AlertModalPresentationProps = {
  onConfirm: () => void;
  open: boolean;
} & Omit<AlertModalProps, "onClose">;

export type AlertModalProps = {
  confirmText?: string;
  confirmButtonProps?: ButtonProps;
  onClose: (confirmResult: boolean) => void;
} & Omit<ConfirmModalBaseProps, "buttons" | "open">;

export const AlertModalPresentation = ({
  open,
  confirmText,
  onConfirm,
  confirmButtonProps,
  ...delegated
}: AlertModalPresentationProps): JSX.Element => {
  const ConfirmButton = () => (
    <Button variant="contained" {...confirmButtonProps} onClick={onConfirm}>
      {confirmText || "confirm"}
    </Button>
  );
  return (
    <ConfirmModalBase
      {...delegated}
      buttons={<ConfirmButton />}
      open={open}
      onBackdropClick={onConfirm}
    />
  );
};

export const AlertModal = ({
  body,
  title,
  onClose,
  ...delegated
}: AlertModalProps): JSX.Element | null => {
  const [open, setOpen] = useState(true);

  const onConfirm = () => {
    onClose(true);
    setOpen(false);
  };

  return (
    <AlertModalPresentation
      {...delegated}
      open={open}
      body={body}
      title={title}
      onConfirm={onConfirm}
    />
  );
};
