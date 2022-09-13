import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestProvider } from "../utils-for-component-test";
import { PageWrapper } from "./page/PageWrapper";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount, page }) => {
  const component = await mount(
    <ComponentTestProvider>
      <PageWrapper repository="test">
        <span>test</span>
      </PageWrapper>
    </ComponentTestProvider>
  );
  await expect(page).toHaveScreenshot({});
  await component.locator("text=Login").click();
  await expect(page).toHaveScreenshot({ animations: "disabled" });
});
