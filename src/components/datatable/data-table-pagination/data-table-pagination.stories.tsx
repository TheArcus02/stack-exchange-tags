import type { Meta, StoryObj } from '@storybook/react'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { DataTablePagination } from './data-table-pagination'
import { mockColumns, mockUsers } from '@/lib/mocks/datatable.mock'

const meta: Meta<typeof DataTablePagination> = {
  title: 'components/DataTable/DataTablePagination',
  component: DataTablePagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DataTablePaginationWithHook = () => {
  const table = useReactTable({
    data: mockUsers,
    columns: mockColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <DataTablePagination table={table} />
}

const Template: Story = {
  render: () => <DataTablePaginationWithHook />,
}

export const Default: Story = {
  ...Template,
}
