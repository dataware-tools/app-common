import React from "react";
import { toast } from "react-toastify";
import { Toast } from "./Toast";
import { Toaster } from "./Toaster";

export default {
  component: Toast,
  title: "toast/Toast",
};

export const Default = (): JSX.Element => {
  return (
    <div>
      <button onClick={() => toast(<Toast>test</Toast>)}>toaster</button>
      <Toaster />
    </div>
  );
};
