import type { Meta, StoryObj } from '@storybook/react'
import { DataTableToolbar } from './data-table-toolbar'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { mockColumns, mockUsers } from '@/lib/mocks/datatable.mock'

const meta: Meta<typeof DataTableToolbar> = {
  title: 'components/DataTable/DataTableToolbar',
  component: DataTableToolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DataTableToolbarWithHook = () => {
  const table = useReactTable({
    data: mockUsers,
    columns: mockColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <DataTableToolbar table={table} />
}

const Template: Story = {
  render: () => <DataTableToolbarWithHook />,
}

export const Default: Story = {
  ...Template,
}
