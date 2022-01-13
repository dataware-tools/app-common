import { screen, fireEvent, getAllByRole } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { confirm, alert } from "./window";

describe("confirm()", () => {
  test("should render dialog can be closed by clicking button", () => {
    render(
      <button
        onClick={async () => {
          await confirm({});
        }}
      >
        click me!
      </button>
    );

    expect(screen.queryByRole("alertdialog")).toBeNull();

    fireEvent.click(screen.getByRole("button"));
    const confirmDialog = screen.getByRole("alertdialog");
    const confirmButton = getAllByRole(confirmDialog, "button");

    fireEvent.click(confirmButton[0]);
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });
});

describe("alert()", () => {
  test("should render dialog can be closed by clicking button", () => {
    render(
      <button
        onClick={async () => {
          await alert({});
        }}
      >
        click me!
      </button>
    );

    expect(screen.queryByRole("alertdialog")).toBeNull();

    fireEvent.click(screen.getByRole("button"));
    const confirmDialog = screen.getByRole("alertdialog");
    const confirmButton = getAllByRole(confirmDialog, "button");

    fireEvent.click(confirmButton[0]);
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });
});
