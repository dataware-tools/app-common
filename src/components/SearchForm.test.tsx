import "@testing-library/jest-dom/extend-expect";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "../test-utils";
import { SearchForm } from "./SearchForm";
import { Controlled } from "./SearchForm.stories";

describe("SearchForm", () => {
  test("should contains search and searchbox roles", () => {
    render(<Controlled />);
    expect(screen.getByRole("search")).toBeDefined();
    expect(screen.getByRole("searchbox")).toBeDefined();
  });

  test("should fire onChange and onSearch when controlled", () => {
    const mockOnSearch = jest.fn();
    const mockOnChange = jest.fn();

    render(
      <SearchForm onSearch={mockOnSearch} onChange={mockOnChange} value="A" />
    );

    screen.getByRole("searchbox").focus();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toHaveAttribute("value", "A");
    userEvent.keyboard("A{Enter}");
    expect(mockOnChange).toHaveBeenCalledWith("AA");

    expect(mockOnSearch).toHaveBeenCalledWith("A");
  });

  test("should fire onChange and onSearch when controlled with enableSearchHistory", async () => {
    const promise = Promise.resolve();
    const mockOnSearch = jest.fn(() => promise);
    const mockOnChange = jest.fn();

    render(
      <SearchForm
        onSearch={mockOnSearch}
        onChange={mockOnChange}
        value="A"
        enableSearchHistory
        searchHistoryKey="test"
      />
    );

    screen.getByRole("searchbox").focus();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toHaveAttribute("value", "A");
    userEvent.keyboard("A{Enter}");
    expect(mockOnChange).toHaveBeenCalledWith("AA");

    expect(mockOnSearch).toHaveBeenCalledWith("A");

    // See: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning#how-to-fix-the-act-warning
    await act(() => promise);
  });

  test("should fire onSearch when uncontrolled", () => {
    const mockOnSearch = jest.fn();

    render(<SearchForm onSearch={mockOnSearch} defaultValue="A" />);

    screen.getByRole("searchbox").focus();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toHaveAttribute("value", "A");
    userEvent.keyboard("A{Enter}");

    expect(mockOnSearch).toHaveBeenCalledWith("AA");
  });

  test("should fire onSearch when uncontrolled with enableSearchHistory", async () => {
    const promise = Promise.resolve();
    const mockOnSearch = jest.fn(() => promise);

    render(
      <SearchForm
        onSearch={mockOnSearch}
        defaultValue="A"
        enableSearchHistory
        searchHistoryKey="test"
      />
    );

    screen.getByRole("searchbox").focus();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toHaveAttribute("value", "A");
    userEvent.keyboard("A{Enter}");

    expect(mockOnSearch).toHaveBeenCalledWith("AA");

    await act(() => promise);
  });
});
