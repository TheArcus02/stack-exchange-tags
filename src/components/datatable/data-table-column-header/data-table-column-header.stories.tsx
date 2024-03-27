import type { Meta, StoryObj } from '@storybook/react'
import { DataTableColumnHeader } from './data-table-column-header'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { mockColumns, mockUsers } from '@/lib/mocks/datatable.mock'
import {
  TableRow,
  TableHead,
  Table,
  TableHeader,
} from '@/components/ui/table/table'

const meta: Meta<typeof DataTableColumnHeader> = {
  title: 'components/DataTable/DataTableColumnHeader',
  component: DataTableColumnHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      disabled: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const TableHeaders = () => {
  const table = useReactTable({
    data: mockUsers,
    columns: [mockColumns[0]],
    getCoreRowModel: getCoreRowModel(),
  })

  return (
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
    </Table>
  )
}

const Template: Story = {
  render: () => <TableHeaders />,
}

export const Default: Story = {
  ...Template,
}
