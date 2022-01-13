import { fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { AlertModal } from "./AlertModal";

describe("AlertModal", () => {
  test("should have alertdialog role", () => {
    render(<AlertModal onClose={() => console.log("dummy")} />);
    expect(screen.getByRole("alertdialog")).toBeDefined();
  });

  test("should have one button", () => {
    render(<AlertModal onClose={() => console.log("dummy")} />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call onClose when button is clicked", async () => {
    const mockOnClose = jest.fn();
    render(<AlertModal onClose={mockOnClose} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClose).toHaveBeenCalledWith(true);
    await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
  });

  test("can be customized showing text by passing specific props", () => {
    render(
      <AlertModal
        onClose={() => console.log("dummy")}
        body="body"
        title="title"
        confirmText="confirmText"
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent("confirmText");
    expect(screen.getByRole("heading")).toHaveTextContent("title");
    expect(screen.getByText("body")).toBeDefined();
  });
});
