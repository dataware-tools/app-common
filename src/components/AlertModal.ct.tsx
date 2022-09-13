import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestProvider } from "../utils-for-component-test";
import { AlertOnClick } from "./AlertModal.stories";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount, page }) => {
  const component = await mount(
    <ComponentTestProvider>
      <AlertOnClick />
    </ComponentTestProvider>
  );
  await component.click();
  await expect(page).toHaveScreenshot({ animations: "disabled" });
  await page.locator("text=yes").click();
  await expect(page).toHaveScreenshot({ animations: "disabled" });
});
