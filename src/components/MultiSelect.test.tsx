import {
  screen,
  fireEvent,
  getAllByRole,
  getAllByText,
} from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Controlled } from "./MultiSelect.stories";

describe("MultiSelect", () => {
  test("should work as multi-selectable combobox", () => {
    render(<Controlled />);

    // At first, MultiSelect shows 1 selected value
    expect(screen.getByText(/test.*/)).toBeDefined();

    // When clicking non-focused MultiSelect, it should show option list
    const unfocusedCombobox = screen.getByRole("combobox");
    fireEvent.click(unfocusedCombobox);
    const combobox = screen.getByTestId("MultiSelectBox");
    const listbox = screen.getByRole("listbox");
    expect(combobox).toBeDefined();
    expect(listbox).toBeDefined();

    const initialOptionNum = getAllByRole(listbox, "option").length;
    const initialSelectedNum = getAllByText(combobox, /test.*/).length;
    expect(initialOptionNum >= 1).toBeTruthy();

    // When option is selected, it should move into combobox
    const nonSelectedOption = screen.getAllByRole("option")[0];
    fireEvent.click(nonSelectedOption);
    const optionNumAfterSelected = getAllByRole(listbox, "option").length;
    const selectedNumAfterSelected = getAllByText(combobox, /test.*/).length;
    expect(initialOptionNum - 1 === optionNumAfterSelected).toBeTruthy();
    expect(initialSelectedNum + 1 === selectedNumAfterSelected).toBeTruthy();

    // When option is deselected, it should move into listbox
    const buttonForDeselectOption = screen.getAllByTestId("ClearIcon")[0];
    fireEvent.click(buttonForDeselectOption);
    const optionNumAfterDeselected = getAllByRole(listbox, "option").length;
    const selectedNumAfterDeselected = getAllByText(combobox, /test.*/).length;
    expect(initialOptionNum === optionNumAfterDeselected).toBeTruthy();
    expect(initialSelectedNum === selectedNumAfterDeselected).toBeTruthy();
  });
});
