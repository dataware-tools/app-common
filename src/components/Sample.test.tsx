import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Sample } from "./Sample";

describe("SampleComponent", () => {
  test("is rendered", () => {
    const sample = "this is test";
    render(<Sample sample={sample} />);
    expect(screen.getByRole("main")).toHaveTextContent(sample);
  });
});
