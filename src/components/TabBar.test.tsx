import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./TabBar.stories";

describe("TabBar", () => {
  test("should work as tablist", () => {
    render(<Controlled />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length >= 2).toBeTruthy();

    expect(screen.getByRole("tablist")).toBeDefined();

    expect(screen.getByText("foo!!")).toBeDefined();
    fireEvent.click(tabs[1]);
    expect(screen.getByText("bar!!")).toBeDefined();
    //
    //
  });

  test.todo(`If element of indicator for current selected tab can be got, we should test it.
             (In 21/12/22, the indicator have no attribute for identifying it, so we can't get the element)`);
});
