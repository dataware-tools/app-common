import {
  fireEvent,
  getAllByRole,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { ConfirmModal } from "./ConfirmModal";

describe("ConfirmModal", () => {
  test("should have alertdialog role", () => {
    render(<ConfirmModal onClose={async () => ({})} />);
    expect(screen.getByRole("alertdialog")).toBeDefined();
  });

  test("should have two button", () => {
    render(<ConfirmModal onClose={() => ({})} />);
    expect(
      getAllByRole(screen.getByRole("alertdialog"), "button")
    ).toHaveLength(2);
  });

  test("should call onClose when button is clicked", async () => {
    const mockOnClose = jest.fn(() => ({}));
    render(<ConfirmModal onClose={mockOnClose} />);

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(mockOnClose).toHaveBeenCalledWith(true);
    await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
  });

  test("should cancel closing modal when onClose return { cancelCloseModal: true }", () => {
    const mockOnClose = jest.fn(() => ({ cancelCloseModal: true }));
    render(<ConfirmModal onClose={mockOnClose} />);

    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(mockOnClose).toHaveBeenCalledWith(false);
    expect(screen.getByRole("alertdialog")).toBeDefined();
  });

  test("can be customized showing text by passing specific props", () => {
    render(
      <ConfirmModal
        onClose={() => ({})}
        body="body"
        title="title"
        confirmText="confirmText"
        cancelText="cancelText"
      />
    );

    expect(screen.getAllByRole("button")[0]).toHaveTextContent("confirmText");
    expect(screen.getAllByRole("button")[1]).toHaveTextContent("cancelText");
    expect(screen.getByRole("heading")).toHaveTextContent("title");
    expect(screen.getByText("body")).toBeDefined();
  });
});
