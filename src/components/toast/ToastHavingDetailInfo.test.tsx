import "@testing-library/jest-dom/extend-expect";
import { getByRole } from "@testing-library/dom";
import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../../test-utils";
import { Default } from "./ToastHavingDetailInfo.stories";

describe("Toast", () => {
  test("should toast alert having button that display alert dialog", async () => {
    render(<Default />);
    expect(screen.queryAllByRole("alert")).toHaveLength(0);
    screen.getByRole("button").click();
    await expect(screen.findAllByRole("alert")).resolves.toBeDefined();

    const toast = screen.getAllByRole("alert")[0];
    getByRole(toast, "button").click();
    expect(screen.getByRole("alertdialog")).toBeDefined();
  });
});
