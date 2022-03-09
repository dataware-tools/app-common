import { screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./RecursiveFilterSelector.stories";

describe("RecursiveFilterSelector", () => {
  test("should toggle collapse when filter name clicked", async () => {
    render(<Controlled />);

    const buttonsOnInitState = screen.getAllByRole("button");
    fireEvent.click(buttonsOnInitState[0]);
    const buttons = screen.getAllByRole("button");
    // We should wait for finishing animation
    await waitFor(() => expect(buttons.length >= 4).toBeTruthy());

    const filterValue = buttons[1];
    expect(filterValue).toBeVisible();

    fireEvent.click(buttonsOnInitState[0]);
    await waitFor(() => expect(filterValue).not.toBeVisible());
  });

  test("should toggle icon when filter value clicked", async () => {
    render(<Controlled />);

    const buttonsOnInitState = screen.getAllByRole("button");
    fireEvent.click(buttonsOnInitState[0]);
    const buttons = screen.getAllByRole("button");
    // We should wait for finishing animation
    await waitFor(() => expect(buttons.length >= 4).toBeTruthy());

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
  });
});
