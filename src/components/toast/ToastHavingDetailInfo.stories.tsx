import React from "react";
import { toast } from "react-toastify";
import { ErrorMessage } from "../ErrorMessage";
import { ToastHavingDetailModal } from "./ToastHavingDetailInfo";
import { Toaster } from "./Toaster";

export default {
  component: ToastHavingDetailModal,
  title: "toast/ToastHavingDetailModal",
};

export const Default = (): JSX.Element => {
  return (
    <div>
      <button
        onClick={() =>
          toast(
            <ToastHavingDetailModal
              detailContent={
                <ErrorMessage
                  reason="This is test"
                  instruction="Don't worry!"
                />
              }
            >
              test
            </ToastHavingDetailModal>
          )
        }
      >
        toaster
      </button>
      <Toaster />
    </div>
  );
};
