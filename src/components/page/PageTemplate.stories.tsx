import React from "react";
import { TestAuthProvider } from "../../test-utils";
import { PageTemplate } from "./PageTemplate";

export default {
  component: PageTemplate,
  title: "Layout/PageTemplate",
};

export const Default = (): JSX.Element => (
  <TestAuthProvider>
    <PageTemplate />
  </TestAuthProvider>
);
// This story has logic for authentication, so should be skipped in visual regression test
Default.story = {
  parameters: { loki: { skip: true } },
};
