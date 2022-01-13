import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("should contains alert role", () => {
    render(<ErrorMessage />);
    expect(screen.getByRole("alert")).toBeDefined();
  });

  test("can be customized showing text by passing specific props", () => {
    render(<ErrorMessage reason="reason" instruction="instruction" />);

    expect(screen.getByText("reason")).toBeDefined();
    expect(screen.getByText("instruction")).toBeDefined();
  });
});
