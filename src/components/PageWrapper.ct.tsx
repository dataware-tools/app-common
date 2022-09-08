import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { sleep } from "../utils";
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
  await expect(await page.screenshot()).toMatchSnapshot();
  await component.locator("text=Login").click();
  await sleep(1000);
  await expect(await page.screenshot()).toMatchSnapshot();
});
