import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import React, { RefObject } from "react";

import { TableRow, TableRowProps } from "./TableRow";

export type TableProps = {
  rows: TableRowProps["row"][];
  columns: (TableRowProps["columns"][number] & { label?: string })[];
  onDeleteRow?: TableRowProps["onDelete"];
  onClickRow?: TableRowProps["onClick"];
  disableHoverRow?: TableRowProps["disableHoverRow"];
  disableHoverCell?: TableRowProps["disableHoverCell"];
  stickyHeader?: boolean;
  bottomRef?: RefObject<HTMLDivElement>;
};

export const Table = ({
  rows,
  columns,
  onDeleteRow,
  onClickRow,
  stickyHeader,
  bottomRef,
  disableHoverRow,
  disableHoverCell,
}: TableProps): JSX.Element => {
  const getAlign: TableRowProps["getAlign"] = (columnType) =>
    columnType === "number" ? "right" : "left";
  return (
    <>
      <MuiTable stickyHeader={stickyHeader}>
        <TableHead>
          <MuiTableRow>
            {columns.map((column) => (
              <TableCell key={column.field} align={getAlign(column.type)}>
                {column.label || column.field}
              </TableCell>
            ))}
            {onDeleteRow ? <TableCell /> : null}
          </MuiTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              index={index}
              columns={columns}
              onDelete={onDeleteRow}
              onClick={onClickRow}
              getAlign={getAlign}
              disableHoverRow={disableHoverRow}
              disableHoverCell={disableHoverCell}
            />
          ))}
        </TableBody>
      </MuiTable>
      <div ref={bottomRef} />
    </>
  );
};
