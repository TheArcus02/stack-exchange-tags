import * as React from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '../data-table-column-header/data-table-column-header'

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Name' />
    },
  },
  {
    accessorKey: 'count',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Count' />
    },
  },
]
