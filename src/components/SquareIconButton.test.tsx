import AddCircle from "@mui/icons-material/AddCircle";
import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { SquareIconButton } from "./SquareIconButton";

describe("SquareIconButton", () => {
  test("should contains button role", () => {
    render(
      <SquareIconButton
        onClick={() => {
          console.log("dummy");
        }}
        icon={<AddCircle />}
      />
    );
    expect(screen.getByRole("button")).toBeDefined();
  });
});
