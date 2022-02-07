import React from "react";
import { toast } from "react-toastify";
import { ErrorMessage } from "../ErrorMessage";
import { ToastHavingDetailInfo } from "./ToastHavingDetailInfo";
import { Toaster } from "./Toaster";

export default {
  component: ToastHavingDetailInfo,
  title: "toast/ToastHavingDetailModal",
};

export const Default = (): JSX.Element => {
  return (
    <div>
      <button
        onClick={() =>
          toast.error(
            <ToastHavingDetailInfo
              detailContent={
                <ErrorMessage
                  variant="transparent"
                  reason="This is test"
                  instruction="toooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo ooo long instruction"
                />
              }
            >
              test
            </ToastHavingDetailInfo>
          )
        }
      >
        toaster
      </button>
      <Toaster />
    </div>
  );
};
