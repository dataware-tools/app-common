import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { LoadingIndicator } from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  test("should contains progressbar role", () => {
    render(<LoadingIndicator />);
    expect(screen.getByRole("progressbar")).toBeDefined();
  });
});
