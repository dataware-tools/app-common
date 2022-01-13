import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { render } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Table } from "./Table";

describe("Table", () => {
  test("should render interactive table", () => {
    const mockOnClickRow = jest.fn();
    const mockOnDeleteRow = jest.fn();
    const columns = [
      { field: "role_id", type: "number" as const },
      { field: "name", type: "string" as const, label: "Name" },
      { field: "description" },
    ];
    const rows = [
      { name: "name1", description: "description1", role_id: "1" },
      { name: "name2", description: "description2", role_id: "2" },
    ];
    render(
      <Table
        columns={columns}
        rows={rows}
        onClickRow={mockOnClickRow}
        onDeleteRow={mockOnDeleteRow}
      />
    );

    fireEvent.click(screen.getByText("name1"));
    expect(mockOnClickRow).toHaveBeenCalledWith({
      index: 0,
      row: { name: "name1", description: "description1", role_id: "1" },
      cell: { field: "name", content: "name1" },
    });

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(mockOnDeleteRow).toHaveBeenCalledWith({
      index: 0,
      row: { name: "name1", description: "description1", role_id: "1" },
      cell: { field: "__deleteButton", content: "__deleteButton" },
    });
  });
});
