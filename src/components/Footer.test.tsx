import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should contains contentinfo role", () => {
    render(<Footer repository="dummy" />);
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });
});
