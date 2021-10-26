import Box, { BoxProps } from "@mui/material/Box";
import { useAuth } from "oidc-react";
import React from "react";
import { ExperimentalHeader } from "../ExperimentalHeader";
import { Footer } from "../Footer";
import { LoadingIndicator } from "../LoadingIndicator";

export type ExperimentalPageWrapperProps = {
  repository: string;
} & BoxProps;

export const ExperimentalPageWrapper = ({
  children,
  repository,
  sx,
  ...delegated
}: ExperimentalPageWrapperProps): JSX.Element => {
  const { isLoading } = useAuth();
  const FullWidthContainer = ({ sx, ...delegated }: BoxProps) => {
    return (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          width: "100vw",
          ...sx,
        }}
        {...delegated}
      />
    );
  };

  return isLoading ? (
    <FullWidthContainer>
      <LoadingIndicator />
    </FullWidthContainer>
  ) : (
    <div>
      <ExperimentalHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // 100vh - Header size - Footer size
          height: "calc(100vh - 64px - 55px)",
          width: "100vw",
          ...sx,
        }}
        {...delegated}
      >
        {children}
      </Box>
      <Footer repository={repository} />
    </div>
  );
};
