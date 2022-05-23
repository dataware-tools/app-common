import {
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./FilterSelector.stories";

describe("FilterSelector", () => {
  test("should toggle collapse when filter name clicked", async () => {
    render(<Controlled />);

    const filterName = screen.getByRole("button");
    fireEvent.click(filterName);
    const buttons = screen.getAllByRole("button");
    // We should wait for finishing animation
    await waitFor(() => expect(buttons.length >= 2).toBeTruthy());

    const filterValue = buttons[1];
    expect(filterValue).toBeVisible();

    fireEvent.click(filterName);
    await waitFor(() => expect(filterValue).not.toBeVisible());
  });

  test("should toggle icon when filter value clicked", async () => {
    const uncheckedIconId = "CheckBoxOutlineBlankIcon";
    const checkedIconId = "CheckBoxIcon";
    render(<Controlled />);

    const filterName = screen.getByRole("button");
    fireEvent.click(filterName);
    const buttons = screen.getAllByRole("button");
    await waitFor(() => expect(buttons.length >= 2).toBeTruthy());

    const filterValue = buttons[2];
    expect(getByTestId(filterValue, uncheckedIconId)).toBeDefined();

    fireEvent.click(filterValue);
    expect(getByTestId(filterValue, checkedIconId)).toBeDefined();

    fireEvent.click(filterValue);
    expect(getByTestId(filterValue, uncheckedIconId)).toBeDefined();
  });
});
