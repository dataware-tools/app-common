import {
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./FilterSelectorList.stories";

describe("FilterSelectorList", () => {
  test("should toggle collapse when filter name clicked", async () => {
    render(<Controlled />);

    const filterNames = screen.getAllByRole("button");
    expect(filterNames).toHaveLength(2);

    const topFilterName = filterNames[0];
    fireEvent.click(topFilterName);
    const buttons = screen.getAllByRole("button");
    // We should wait for finishing animation
    await waitFor(() => expect(buttons.length >= 3).toBeTruthy());

    const filterValue = buttons[1];
    expect(filterValue).toBeVisible();

    fireEvent.click(topFilterName);
    await waitFor(() => expect(filterValue).not.toBeVisible());
  });

  test("should toggle icon when filter value clicked", async () => {
    render(<Controlled />);

    const topFilterName = screen.getAllByRole("button")[0];
    fireEvent.click(topFilterName);
    const buttons = screen.getAllByRole("button");
    await waitFor(() => expect(buttons.length >= 3).toBeTruthy());

    const uncheckedIconId = "CheckBoxOutlineBlankIcon";
    const checkedIconId = "CheckBoxIcon";
    const filterValue = buttons[1];
    expect(getByTestId(filterValue, uncheckedIconId)).toBeDefined();
    fireEvent.click(filterValue);
    expect(getByTestId(filterValue, checkedIconId)).toBeDefined();
    fireEvent.click(filterValue);
    expect(getByTestId(filterValue, uncheckedIconId)).toBeDefined();
  });
});
