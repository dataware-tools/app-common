import { useAuth } from "oidc-react";
import React from "react";
import { HeaderPresentation } from "./Header";

export const ExperimentalHeader = (): JSX.Element => {
  const { userData, signOut, signIn } = useAuth();

  return (
    <HeaderPresentation
      isAuthenticated={Boolean(userData)}
      onLogin={signIn}
      onLogout={signOut}
    />
  );
};
