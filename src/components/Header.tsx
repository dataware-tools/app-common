import { useAuth0 } from "@auth0/auth0-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { NoticeableLetters } from "./NoticeableLetters";

export type HeaderPresentationProps = {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

export const HeaderPresentation = ({
  isAuthenticated,
  onLogin,
  onLogout,
}: HeaderPresentationProps): JSX.Element => {
  return (
    <>
      <AppBar
        sx={{ color: "common.white" }}
        elevation={0}
        position="sticky"
        role="banner"
      >
        <Toolbar
          sx={{
            backgroundColor: "common.black",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Link href="/" color="inherit" sx={{ fontSize: "1.25rem" }}>
              <NoticeableLetters>Dataware Tool</NoticeableLetters>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            {!isAuthenticated ? (
              <Link
                color="inherit"
                sx={{ cursor: "pointer" }}
                onClick={onLogin}
              >
                <NoticeableLetters>Login</NoticeableLetters>
              </Link>
            ) : (
              <Link
                color="inherit"
                sx={{ cursor: "pointer" }}
                onClick={onLogout}
              >
                <NoticeableLetters>Logout</NoticeableLetters>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export const Header = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const redirectUriWhenLogin =
    typeof window === "undefined" ? null : `${window.location.origin}/callback`;
  const returnToWhenLogin =
    typeof window === "undefined" ? null : window.location.href;
  const returnToWhenLogout =
    typeof window === "undefined" ? null : window.location.origin;

  return (
    <HeaderPresentation
      isAuthenticated={isAuthenticated}
      onLogin={() => {
        loginWithRedirect({
          // @ts-expect-error redirectUri is not null in client side
          redirectUri: redirectUriWhenLogin,
          appState: { returnTo: returnToWhenLogin },
        });
      }}
      // @ts-expect-error returnTO is not null in client side
      onLogout={() => logout({ returnTo: returnToWhenLogout })}
    />
  );
};
