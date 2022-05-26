import React from "react";
import { toast } from "react-toastify";
import { ErrorMessage } from "../ErrorMessage";
import { ToastHavingDetailInfo } from "./ToastHavingDetailInfo";
import { Toaster } from "./Toaster";

export default {
  component: ToastHavingDetailInfo,
  title: "toast/ToastHavingDetailModal",
};

const DetailInfo = (): JSX.Element => {
  return (
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
  );
};

export const Default = (): JSX.Element => {
  return (
    <div>
      <button onClick={() => toast(DetailInfo)}>toaster</button>
      <Toaster />
    </div>
  );
};
export const Error = (): JSX.Element => {
  return (
    <div>
      <button onClick={() => toast.error(DetailInfo)}>toaster</button>
      <Toaster />
    </div>
  );
};
