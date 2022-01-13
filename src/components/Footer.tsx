import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import React from "react";
import { NoticeableLetters } from "./NoticeableLetters";

export type FooterProps = {
  repository: string;
};

export const Footer = ({ repository }: FooterProps): JSX.Element => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ bottom: 0, backgroundColor: "common.white" }}
        elevation={0}
        component="footer"
      >
        <Box
          sx={{
            color: "text.secondary",
            paddingBottom: "15px",
            paddingLeft: "10vw",
            paddingRight: "10vw",
          }}
        >
          <Divider variant="middle" sx={{ pt: "10px", pb: "5px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Link
                variant="body2"
                color="inherit"
                href="http://www.hdwlab.co.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NoticeableLetters>
                  &copy; Human Dataware Lab.
                </NoticeableLetters>
              </Link>
            </Box>
            <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
              <Link
                variant="body2"
                color="inherit"
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NoticeableLetters>GitHub</NoticeableLetters>
              </Link>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
