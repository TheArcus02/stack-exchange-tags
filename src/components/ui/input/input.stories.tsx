import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input/input'
import { fn } from '@storybook/test'

const meta = {
  title: 'components/ui/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number', 'tel'],
      control: { type: 'radio' },
    },
  },
  args: {
    onChange: fn(),
    disabled: false,
    placeholder: 'Type here...',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => <Input {...args} />,
}

export const Default: Story = {
  ...Template,
  args: {
    type: 'text',
  },
}
