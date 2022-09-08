import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { sleep } from "../utils";
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
  await sleep(100);
  await expect(await page.screenshot()).toMatchSnapshot();
  await page.locator("text=yes").click();
  await sleep(100);
  await expect(await page.screenshot()).toMatchSnapshot();
});
