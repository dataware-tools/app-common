import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { TextCenteringSpan } from "./TextCenteringSpan";

describe("TextCenteringSpan", () => {
  test("should contains roles indicating that it have no function", () => {
    render(<TextCenteringSpan>dummy</TextCenteringSpan>);
    expect(
      // eslint-disable-next-line testing-library/prefer-presence-queries
      screen.queryByRole("none") || screen.queryByRole("presentation")
    ).not.toBeNull();
  });
});
