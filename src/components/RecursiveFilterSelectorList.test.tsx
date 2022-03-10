import { screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./RecursiveFilterSelectorList.stories";

describe("RecursiveFilterSelectorList", () => {
  test("should toggle collapse when filter name clicked", async () => {
    render(<Controlled />);

    const filterNames = screen.getAllByRole("button");
    expect(filterNames).toHaveLength(3);

    const topFilterName = filterNames[1];
    fireEvent.click(topFilterName);
    const buttons = screen.getAllByRole("button");
    // We should wait for finishing animation
    await waitFor(() => expect(buttons.length >= 3).toBeTruthy());

    const filterValue = buttons[2];
    expect(filterValue).toBeVisible();

    fireEvent.click(topFilterName);
    await waitFor(() => expect(filterValue).not.toBeVisible());
  });

  test("should toggle icon when filter value clicked", async () => {
    render(<Controlled />);

    const topFilterName = screen.getAllByRole("button")[1];
    fireEvent.click(topFilterName);
    const buttons = screen.getAllByRole("button");
    await waitFor(() => expect(buttons.length >= 3).toBeTruthy());

    // Open the first tree
    fireEvent.click(buttons[3]);

    // Make sure that no boxes are checked
    const checkBoxOnInitState = screen.getAllByRole("checkbox");
    checkBoxOnInitState.forEach((box) => {
      expect(box).not.toBeChecked();
    });

    // Check the first tree-item
    checkBoxOnInitState[0].click();
    const checkBoxOnState1 = screen.getAllByRole("checkbox");
    await waitFor(() => {
      expect(checkBoxOnState1[0]).toBeChecked();
    });
    await waitFor(() => {
      expect(checkBoxOnState1[1]).toBeChecked();
    });
    await waitFor(() => {
      expect(checkBoxOnState1[2]).toBeChecked();
    });

    // Click Clear button
    const clearButton = screen.getAllByRole("button")[0];
    fireEvent.click(clearButton);
    const checkBoxOnState2 = screen.getAllByRole("checkbox");
    expect(checkBoxOnState2[0]).not.toBeChecked();
    expect(checkBoxOnState2[1]).not.toBeChecked();
  });
});
