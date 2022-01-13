import { screen } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { FileUploadButton } from "./FileUploadButton";

describe("FileUploadButton", () => {
  test("should contains progressbar role in loading", () => {
    render(
      <FileUploadButton
        onFileChange={() => {
          console.log("dummy");
        }}
        loading
      />
    );
    expect(screen.getByRole("progressbar")).toBeDefined();
  });

  test("should be customized by passing children", () => {
    render(
      <FileUploadButton
        onFileChange={() => {
          console.log("dummy");
        }}
      >
        test
      </FileUploadButton>
    );
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });
});
