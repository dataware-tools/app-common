import Button, { ButtonProps } from "@mui/material/Button";
import React, { useState } from "react";
import { ConfirmModalBase, ConfirmModalBaseProps } from "./ConfirmModalBase";
import { Spacer } from "./Spacer";

export type ConfirmModalPresentationProps = {
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
} & Omit<ConfirmModalProps, "onClose">;

export type ConfirmModalProps = {
  confirmText?: string;
  confirmButtonProps?: ButtonProps;
  confirmMode?: "default" | "delete";
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  reverseButtons?: boolean;
  onClose: (
    confirmResult: boolean
  ) =>
    | Promise<{ cancelCloseModal?: boolean } | undefined>
    | { cancelCloseModal?: boolean }
    | undefined;
} & Omit<ConfirmModalBaseProps, "buttons" | "open">;

export const ConfirmModalPresentation = ({
  open,
  confirmText,
  onConfirm,
  confirmButtonProps,
  cancelText,
  onCancel,
  cancelButtonProps,
  reverseButtons,
  confirmMode,
  ...delegated
}: ConfirmModalPresentationProps): JSX.Element => {
  const ConfirmButton = () => {
    switch (confirmMode) {
      case "delete":
        return (
          <Button
            variant="contained"
            {...confirmButtonProps}
            onClick={onConfirm}
            color="error"
          >
            {confirmText || "delete"}
          </Button>
        );

      case "default":
      default:
        return (
          <Button
            variant="contained"
            {...confirmButtonProps}
            onClick={onConfirm}
          >
            {confirmText || "confirm"}
          </Button>
        );
    }
  };
  const CancelButton = () => (
    <Button variant="text" {...cancelButtonProps} onClick={onCancel}>
      {cancelText || "cancel"}
    </Button>
  );
  return (
    <ConfirmModalBase
      {...delegated}
      open={open}
      buttons={
        <>
          {reverseButtons ? <CancelButton /> : <ConfirmButton />}
          <Spacer direction="horizontal" size="10px" />
          {reverseButtons ? <ConfirmButton /> : <CancelButton />}
        </>
      }
    />
  );
};
export const ConfirmModal = ({
  body,
  title,
  onClose,
  ...delegated
}: ConfirmModalProps): JSX.Element | null => {
  const [open, setOpen] = useState(true);

  const onCancel = async () => {
    const res = await onClose(false);
    if (res?.cancelCloseModal) {
      return;
    }
    setOpen(false);
  };

  const onConfirm = async () => {
    const res = await onClose(true);
    if (res?.cancelCloseModal) {
      return;
    }
    setOpen(false);
  };

  return (
    <ConfirmModalPresentation
      {...delegated}
      open={open}
      body={body}
      title={title}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};
