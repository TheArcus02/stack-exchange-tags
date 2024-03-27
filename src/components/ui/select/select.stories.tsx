import * as React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/select'

const meta: Meta = {
  title: 'components/ui/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Default: Story = {
  ...Template,
}
