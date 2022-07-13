import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import MuiTableRow from "@mui/material/TableRow";
import React from "react";

type CellContent = string | number | Record<string, any> | any[];
type Row = Record<string, CellContent>;
export type TargetDetail = {
  index: number;
  row: Record<string, CellContent>;
  cell: { field: string; content: CellContent };
};
type Columns = {
  field: string;
  type?: "string" | "number";
  ifEmpty?: string | number;
}[];

export type TableRowPresentationProps = {
  onClickCell: (targetDetail: TargetDetail) => void;
  onClickDeleteButton: (targetDetail: TargetDetail) => void;
  haveDeleteButton: boolean;
  fixCellContent: (
    cellContent: CellContent,
    ifEmpty?: string | number
  ) => string | number | undefined;
} & Omit<TableRowProps, "onDelete" | "onClick">;

export type TableRowProps = {
  row: Row;
  index: number;
  onDelete?: (targetDetail: TargetDetail) => void;
  onClick?: (targetDetail: TargetDetail) => void;
  columns: Columns;
  getAlign: (columnType: Columns[number]["type"]) => TableCellProps["align"];
  disableHoverRow?: boolean;
  disableHoverCell?: boolean;
};

export const TableRowPresentation = ({
  columns,
  row,
  onClickDeleteButton,
  onClickCell,
  haveDeleteButton,
  index,
  fixCellContent,
  getAlign,
  disableHoverRow,
  disableHoverCell,
}: TableRowPresentationProps): JSX.Element => {
  return (
    <MuiTableRow
      sx={
        disableHoverRow
          ? undefined
          : {
              cursor: "pointer",
              ":hover": {
                backgroundColor: "action.hover",
              },
            }
      }
    >
      {columns.map((column) => {
        const field = column.field;
        const cellContent = row[field];
        const fixedCellContent = fixCellContent(cellContent, column.ifEmpty);
        return (
          <TableCell
            sx={
              disableHoverCell
                ? {}
                : {
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "action.hover",
                    },
                  }
            }
            key={field}
            align={getAlign(column.type)}
            onClick={() =>
              onClickCell({
                index,
                row,
                cell: { field, content: cellContent },
              })
            }
          >
            {fixedCellContent}
          </TableCell>
        );
      })}
      {haveDeleteButton ? (
        <TableCell align="center" padding="none" size="small">
          <IconButton
            onClick={() =>
              onClickDeleteButton({
                index,
                row,
                cell: { field: "__deleteButton", content: "__deleteButton" },
              })
            }
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      ) : null}
    </MuiTableRow>
  );
};

export const TableRow = ({
  onClick,
  onDelete,
  ...delegated
}: TableRowProps): JSX.Element => {
  const haveDeleteButton = onDelete != null;
  const isEmpty = (cellContent: CellContent): boolean => {
    if (!cellContent) {
      return true;
    }
    if (typeof cellContent === "string") {
      return cellContent === "";
    }
    if (typeof cellContent === "number") {
      return false;
    }
    if (Array.isArray(cellContent)) {
      return cellContent.length <= 0;
    }
    return Object.keys(cellContent).length <= 0;
  };

  const fixCellContent: TableRowPresentationProps["fixCellContent"] = (
    cellContent,
    ifEmpty
  ) => {
    if (isEmpty(cellContent)) {
      return ifEmpty;
    } else if (
      typeof cellContent === "string" ||
      typeof cellContent === "number"
    ) {
      return cellContent;
    } else {
      return JSON.stringify(cellContent);
    }
  };

  const onClickCell: TableRowPresentationProps["onClickCell"] = ({
    index,
    row,
    cell,
  }) => {
    if (onClick) {
      onClick({ index, row, cell });
    }
  };

  const onClickDeleteButton: TableRowPresentationProps["onClickDeleteButton"] =
    ({ index, row, cell }) => {
      if (onDelete) {
        onDelete({ index, row, cell });
      }
    };

  return (
    <TableRowPresentation
      {...delegated}
      onClickCell={onClickCell}
      onClickDeleteButton={onClickDeleteButton}
      haveDeleteButton={haveDeleteButton}
      fixCellContent={fixCellContent}
    />
  );
};
