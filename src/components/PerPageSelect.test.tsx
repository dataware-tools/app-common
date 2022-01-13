import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./PerPageSelect.stories";

describe("PerPageSelect", () => {
  test("should have button role", () => {
    render(<Controlled />);

    // At first, show selected value
    expect(screen.getByText("20")).toBeDefined();

    // When clicking non-focused PerPageSelect, it should open option list
    const UnfocusedCombobox = screen.getByRole("button");
    fireEvent.click(UnfocusedCombobox);
    const combobox = screen.getByRole("button");
    expect(combobox).toBeDefined();
  });

  test.todo(
    `If option list element can be got, we should test it
     (In 21/12/22, Select component render option list out of "screen", so it's element can't be got)`
  );
});
