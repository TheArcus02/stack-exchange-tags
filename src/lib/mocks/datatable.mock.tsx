import * as React from 'react'

import { DataTableColumnHeader } from '@/components/datatable/data-table-column-header/data-table-column-header'
import { ColumnDef } from '@tanstack/react-table'

export const mockUsers = [
  { name: 'John', age: 30, address: 'New York' },
  { name: 'Jane', age: 25, address: 'London' },
  { name: 'Mike', age: 35, address: 'Los Angeles' },
  { name: 'Emily', age: 28, address: 'Paris' },
  { name: 'Alex', age: 40, address: 'Berlin' },
  { name: 'Sarah', age: 22, address: 'Tokyo' },
  { name: 'Chris', age: 27, address: 'Sydney' },
  { name: 'Amanda', age: 33, address: 'Toronto' },
  { name: 'Daniel', age: 31, address: 'Moscow' },
  { name: 'Laura', age: 26, address: 'Rome' },
  { name: 'Michael', age: 29, address: 'Madrid' },
  { name: 'Jessica', age: 34, address: 'Seoul' },
  { name: 'Ryan', age: 32, address: 'Mexico City' },
  { name: 'Samantha', age: 23, address: 'Bangkok' },
  { name: 'Matthew', age: 36, address: 'Dubai' },
  { name: 'Olivia', age: 24, address: 'Stockholm' },
  { name: 'William', age: 37, address: 'Vienna' },
  { name: 'Grace', age: 38, address: 'Amsterdam' },
  { name: 'Ethan', age: 39, address: 'Brussels' },
  { name: 'Natalie', age: 21, address: 'Athens' },
]

export type MockUserType = (typeof mockUsers)[number]

export const mockColumns: ColumnDef<MockUserType>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
  },
  {
    accessorKey: 'age',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='age' />
    ),
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='address' />
    ),
  },
]
