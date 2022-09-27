import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestProvider } from "../utils-for-component-test";
import { EnableSearchHistory } from "./SearchForm.stories";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount, page }) => {
  const component = await mount(
    <ComponentTestProvider>
      <EnableSearchHistory />
    </ComponentTestProvider>
  );

  await component.locator("input").click();
  await component.locator("input").fill("");
  await page.keyboard.type("search");
  await page.keyboard.press("Enter");
  await expect(page).toHaveScreenshot({ animations: "disabled" });

  await component.locator("input").fill("");
  await page.keyboard.type("history");
  await page.keyboard.press("Enter");
  await expect(page).toHaveScreenshot({ animations: "disabled" });

  await component.locator("input").fill("");
  await page.keyboard.type("sear");
  await expect(page).toHaveScreenshot({ animations: "disabled" });
});
