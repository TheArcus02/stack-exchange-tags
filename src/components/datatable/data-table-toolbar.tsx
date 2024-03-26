import { Table } from '@tanstack/react-table'
import { Input } from '../ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <Input
          placeholder='Filter tags...'
          value={
            (table.getColumn('name')?.getFilterValue() as string) ??
            ''
          }
          onChange={(event) =>
            table
              .getColumn('name')
              ?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
      </div>
      <div className='flex items-center space-x-2'>
        <p className='text-sm font-medium'>Per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className='h-8 w-[70px]'>
            <SelectValue
              placeholder={table.getState().pagination.pageSize}
            />
          </SelectTrigger>
          <SelectContent side='top'>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
