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
});
