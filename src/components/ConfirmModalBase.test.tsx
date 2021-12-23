import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { ConfirmModalBase } from "./ConfirmModalBase";

describe("ConfirmModalBase", () => {
  test("should have alertdialog role", () => {
    render(<ConfirmModalBase buttons={<button>dummy</button>} open />);
    expect(screen.getByRole("alertdialog")).toBeDefined();
  });

  test("can be customized showing text by passing specific props", () => {
    render(
      <ConfirmModalBase
        open
        body="body"
        title="title"
        buttons={<button>button</button>}
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.getByRole("heading")).toHaveTextContent("title");
    expect(screen.getByText("body")).toBeDefined();
  });
});
