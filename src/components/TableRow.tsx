import React from 'react'
import TableCell, { TableCellProps } from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

type CellContent = string | number | Record<string, any> | any[]
type Row = Record<string, CellContent>
type TargetDetail = {
  index: number
  row: Record<string, CellContent>
  cell: { field: string; content: CellContent }
}
type Columns = {
  field: string
  type?: 'string' | 'number'
  ifEmpty?: string | number
}[]

type Props = {
  onClickCell: (targetDetail: TargetDetail) => void
  onClickDeleteButton: (targetDetail: TargetDetail) => void
  haveDeleteButton: boolean
  fixCellContent: (
    cellContent: CellContent,
    ifEmpty?: string | number
  ) => string | number | undefined
} & Omit<ContainerProps, 'onDelete' | 'onClick'>

type ContainerProps = {
  row: Row
  index: number
  onDelete?: (targetDetail: TargetDetail) => void
  onClick?: (targetDetail: TargetDetail) => void
  columns: Columns
  getAlign: (columnType: Columns[number]['type']) => TableCellProps['align']
  disableHoverRow?: boolean
  disableHoverCell?: boolean
}

const Component = ({
  columns,
  row,
  onClickDeleteButton,
  onClickCell,
  haveDeleteButton,
  index,
  fixCellContent,
  getAlign,
  disableHoverRow,
  disableHoverCell
}: Props): JSX.Element => {
  return (
    <TableRow
      sx={
        disableHoverRow
          ? undefined
          : {
              cursor: 'pointer',
              ':hover': {
                backgroundColor: 'action.hover'
              }
            }
      }
    >
      {columns.map((column) => {
        const field = column.field
        const cellContent = row[field]
        const fixedCellContent = fixCellContent(cellContent, column.ifEmpty)
        return (
          <TableCell
            sx={
              disableHoverCell
                ? {}
                : {
                    cursor: 'pointer',
                    ':hover': {
                      backgroundColor: 'action.hover'
                    }
                  }
            }
            key={field}
            align={getAlign(column.type)}
            onClick={() =>
              onClickCell({
                index,
                row,
                cell: { field: field, content: cellContent }
              })
            }
          >
            {fixedCellContent}
          </TableCell>
        )
      })}
      {haveDeleteButton ? (
        <TableCell align='center' padding='none' size='small'>
          <IconButton
            onClick={() =>
              onClickDeleteButton({
                index,
                row,
                cell: { field: '__deleteButton', content: '__deleteButton' }
              })
            }
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      ) : null}
    </TableRow>
  )
}

const Container = ({
  onClick,
  onDelete,
  ...delegated
}: ContainerProps): JSX.Element => {
  const haveDeleteButton = onDelete != null
  const isEmpty = (cellContent: CellContent): boolean => {
    if (!cellContent) {
      return true
    }
    if (typeof cellContent === 'string') {
      return cellContent === ''
    }
    if (typeof cellContent === 'number') {
      return false
    }
    if (Array.isArray(cellContent)) {
      return cellContent.length <= 0
    }
    return Object.keys(cellContent).length <= 0
  }

  const fixCellContent: Props['fixCellContent'] = (cellContent, ifEmpty) => {
    if (isEmpty(cellContent)) {
      return ifEmpty
    } else if (
      typeof cellContent === 'string' ||
      typeof cellContent === 'number'
    ) {
      return cellContent
    } else {
      return JSON.stringify(cellContent)
    }
  }

  const onClickCell: Props['onClickCell'] = ({ index, row, cell }) => {
    if (onClick) {
      onClick({ index, row, cell })
    }
  }

  const onClickDeleteButton: Props['onClickDeleteButton'] = ({
    index,
    row,
    cell
  }) => {
    if (onDelete) {
      onDelete({ index, row, cell })
    }
  }

  return (
    <Component
      {...delegated}
      onClickCell={onClickCell}
      onClickDeleteButton={onClickDeleteButton}
      haveDeleteButton={haveDeleteButton}
      fixCellContent={fixCellContent}
    />
  )
}

export { Container as TableRow }
export type { ContainerProps as TableRowProps, TargetDetail }
