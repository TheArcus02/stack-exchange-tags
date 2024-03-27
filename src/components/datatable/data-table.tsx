import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'
import { DataTableToolbar } from './data-table-toolbar'
import { DataTablePagination } from './data-table-pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  rowCount: number
  pagination: PaginationState
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>
  sorting: SortingState
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>
  columnFilters: ColumnFiltersState
  setColumnFilters: React.Dispatch<
    React.SetStateAction<ColumnFiltersState>
  >
  isPlaceholderData?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  rowCount,
  pagination,
  setPagination,
  sorting,
  setSorting,
  columnFilters,
  setColumnFilters,
  isPlaceholderData,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    rowCount: rowCount,
    manualSorting: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    manualFiltering: true,
    state: {
      pagination,
      sorting,
      columnFilters,
    },
  })

  return (
    <div className='space-y-4'>
      <DataTableToolbar table={table} />
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination
        table={table}
        isPlaceholderData={isPlaceholderData}
      />
    </div>
  )
}
