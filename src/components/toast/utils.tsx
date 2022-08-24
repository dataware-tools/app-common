import React from "react";
import { toast } from "react-toastify";

import { extractErrorMessageFromFetchError } from "../../api/fetchClient";
import { ErrorMessage } from "../ErrorMessage";
import { ToastHavingDetailInfo } from "./ToastHavingDetailInfo";

export const enqueueErrorToastForFetchError = (
  message: string,
  error: any
): void => {
  const { reason, instruction } = extractErrorMessageFromFetchError(error);
  toast.error(
    <ToastHavingDetailInfo
      detailContent={
        <ErrorMessage
          variant="transparent"
          reason={reason}
          instruction={instruction}
        />
      }
    >
      {message}
    </ToastHavingDetailInfo>
  );
};
