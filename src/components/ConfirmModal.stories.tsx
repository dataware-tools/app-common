import { Story } from "@storybook/react";
import React from "react";
import { confirm } from "../utils/window";
import { ConfirmModal, ConfirmModalProps } from "./ConfirmModal";

export default {
  component: ConfirmModal,
  title: "ConfirmModal",
};

const Template: Story<ConfirmModalProps> = (args) => (
  <ConfirmModal
    {...args}
    // This option is necessary for visual regression test by loki
    disablePortal
  />
);

export const Default = Template.bind({});
Default.args = {
  onClose: (res) => {
    window.alert(res);
    return {};
  },
  body: "This is test! please click button!",
  title: "test",
};

export const DeleteMode = Template.bind({});
DeleteMode.args = {
  onClose: (res) => {
    window.alert(res);
    return {};
  },
  body: "This is test! please click button!",
  title: "Confirm delete",
  confirmMode: "delete",
};

export const ConfirmOnClick = (): JSX.Element => (
  <button
    onClick={async () => {
      const res = await confirm({
        body: "This is test! please click button!",
        title: "test",
        confirmText: "yes",
        cancelText: "no",
      });
      window.alert(res);
    }}
  >
    click me!
  </button>
);
