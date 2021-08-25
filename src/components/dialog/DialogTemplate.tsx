import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import React from "react";
import { DialogBody } from "./DialogBody";
import { DialogCloseButton } from "./DialogCloseButton";
import { DialogContainer } from "./DialogContainer";
import { DialogMain } from "./DialogMain";
import { DialogSubTitle } from "./DialogSubTitle";
import { DialogTabBar } from "./DialogTabBar";
import { DialogTitle } from "./DialogTitle";
import { DialogToolBar } from "./DialogToolBar";
import { DialogWrapper } from "./DialogWrapper";

export type DialogTemplateProps = DialogProps;

export const DialogTemplate = ({
  ...delegated
}: DialogTemplateProps): JSX.Element => (
  <Dialog {...delegated}>
    <DialogWrapper>
      <DialogCloseButton onClick={() => window.alert("close!")} />
      <DialogTitle>Title</DialogTitle>
      <DialogContainer maxHeight="60vh" padding="0 0 20px">
        <DialogTabBar
          tabNames={Array(20)
            .fill(0)
            .map((_, i) => `test${i}`)}
          onChange={() => window.alert("change")}
          value={1}
        />
        <DialogBody>
          <DialogSubTitle>Sub title</DialogSubTitle>
          <DialogMain maxWidth="50vw">
            main <br />
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  <br />
                </div>
              ))}
          </DialogMain>
          <DialogToolBar right={<button>toolbar</button>} />
        </DialogBody>
      </DialogContainer>
    </DialogWrapper>
  </Dialog>
);
