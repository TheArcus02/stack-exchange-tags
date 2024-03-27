import type { Meta, StoryObj } from '@storybook/react'
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table'
import {
  MockUserType,
  mockColumns,
  mockUsers,
} from '@/lib/mocks/datatable.mock'
import { DataTable } from '@/components/datatable/data-table'
import { useState } from 'react'

const meta: Meta<typeof DataTable> = {
  title: 'components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    data: mockUsers,
    isFetching: false,
    error: undefined,
    status: 'success',
    isPlaceholderData: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: function Render(args) {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })
    const [sorting, setSorting] = useState<SortingState>([
      {
        id: 'name',
        desc: true,
      },
    ])

    const [columnFilters, setColumnFilters] =
      useState<ColumnFiltersState>([])

    return (
      <DataTable
        columns={mockColumns as ColumnDef<unknown, unknown>[]}
        data={args.data}
        pagination={pagination}
        setPagination={setPagination}
        sorting={sorting}
        setSorting={setSorting}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        isFetching={args.isFetching}
        rowCount={mockUsers.length}
        error={args.error}
        status={args.status}
        isPlaceholderData={false}
        manualPagination={false}
        manualSorting={false}
        manualFiltering={false}
      />
    )
  },
}

export const Default: Story = {
  ...Template,
}
