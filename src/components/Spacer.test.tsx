import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Spacer } from "./Spacer";

describe("Spacer", () => {
  test("should contains roles indicating that it have no function", () => {
    render(<Spacer direction="vertical" size={1} />);
    expect(
      // eslint-disable-next-line testing-library/prefer-presence-queries
      screen.queryByRole("none")
    ).not.toBeNull();
  });
});
