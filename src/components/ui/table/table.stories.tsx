import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableCaption,
  TableHead,
} from '@/components/ui/table/table'

const meta: Meta = {
  title: 'components/ui/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Example Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Users: 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const Default: Story = {
  ...Template,
}
