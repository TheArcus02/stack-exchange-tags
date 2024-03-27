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
import { BarLoader, BeatLoader } from 'react-spinners'
import { useRef } from 'react'

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
  status?: 'error' | 'success' | 'pending'
  error?: Error
  isFetching: boolean
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
  status,
  error,
  isFetching,
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

  const tableRef = useRef<HTMLTableElement>(null)

  return (
    <div className='space-y-4'>
      <DataTableToolbar table={table} />
      <div className='rounded-md border'>
        <Table ref={tableRef}>
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
            {status === 'pending' ? (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24'>
                  <div className='flex justify-center items-center h-full'>
                    <BeatLoader color='#94A3B8' />
                  </div>
                </TableCell>
              </TableRow>
            ) : status === 'error' ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center text-muted-foreground'
                >
                  Error fetching data.
                  <p>{error?.message && ` ${error.message}`}</p>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {isFetching && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className='p-0'
                    >
                      <BarLoader
                        width={tableRef.current?.offsetWidth || 0}
                        color='#94A3B8'
                      />
                    </TableCell>
                  </TableRow>
                )}
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
              </>
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
