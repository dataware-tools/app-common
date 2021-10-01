import { useAuth0 } from "@auth0/auth0-react";
import Box, { BoxProps } from "@mui/material/Box";
import React from "react";
import { ErrorMessage } from "../ErrorMessage";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LoadingIndicator } from "../LoadingIndicator";

export type PageWrapperProps = {
  repository: string;
} & BoxProps;

export const PageWrapper = ({
  children,
  repository,
  sx,
  ...delegated
}: PageWrapperProps): JSX.Element => {
  const { isLoading, error } = useAuth0();

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
  ) : error ? (
    <FullWidthContainer>
      <ErrorMessage reason={error.message} />
    </FullWidthContainer>
  ) : (
    <div>
      <Header />
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
