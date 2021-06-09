import React, { RefObject } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import MuiTableRow from '@material-ui/core/TableRow'

import { TableRow, TableRowProps } from './TableRow'

type Props = {
  rows: TableRowProps['row'][]
  columns: (TableRowProps['columns'][number] & { label?: string })[]
  onDeleteRow?: TableRowProps['onDelete']
  onClickRow?: TableRowProps['onClick']
  disableHoverRow?: TableRowProps['disableHoverRow']
  disableHoverCell?: TableRowProps['disableHoverCell']
  stickyHeader?: boolean
  bottomRef?: RefObject<HTMLDivElement>
}

const Component = ({
  rows,
  columns,
  onDeleteRow,
  onClickRow,
  stickyHeader,
  bottomRef,
  disableHoverRow,
  disableHoverCell
}: Props): JSX.Element => {
  const getAlign: TableRowProps['getAlign'] = (columnType) =>
    columnType === 'number' ? 'right' : 'left'
  return (
    <>
      <Table stickyHeader={stickyHeader}>
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
      </Table>
      <div ref={bottomRef} />
    </>
  )
}

export { Component as Table }
export type { Props as TableProps }
