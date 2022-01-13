import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { HeaderPresentation } from "./Header";

describe("HeaderPresentation", () => {
  test("should contains banner role", () => {
    render(
      <HeaderPresentation
        isAuthenticated
        onLogin={() => console.log("dummy")}
        onLogout={() => console.log("dummy")}
      />
    );
    expect(screen.getByRole("banner")).toBeDefined();
  });
});
