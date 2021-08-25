import React from "react";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";
import { LoadingIndicator } from "./LoadingIndicator";

export type FetchContainerProps = {
  isFetchSuccess: boolean;
  isFetchEnd: boolean;
  errorMessage: ErrorMessageProps;
  children: React.ReactNode;
};
export const FetchContainer = ({
  isFetchSuccess,
  isFetchEnd,
  errorMessage,
  children,
}: FetchContainerProps): JSX.Element => {
  return (
    <>
      {isFetchSuccess ? (
        isFetchEnd ? (
          children
        ) : (
          <LoadingIndicator />
        )
      ) : (
        <ErrorMessage {...errorMessage} />
      )}
    </>
  );
};
