import * as React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button/button'

const meta: Meta = {
  title: 'components/ui/toast',
  component: toast,
  parameters: {
    layout: 'centered',
  },
  args: {
    // @ts-ignore
    message: 'This is a message',
    description: 'This is a description',
    duration: 5000,
    icon: undefined,
  },
} satisfies Meta<typeof toast>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  argTypes: {
    message: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    duration: {
      type: 'number',
    },
    icon: {
      type: 'function',
    },
    toastFn: {
      type: 'function',
    },
  },
  render: function Render(args) {
    console.log(args)
    return (
      <Button
        onClick={() =>
          args.toastFn(args.message, {
            description: args.description,
            duration: args.duration,
            icon: args.icon,
          })
        }
      >
        Show toast
      </Button>
    )
  },
}

export const Default: Story = {
  ...Template,
  args: {
    toastFn: toast,
    message: 'This is a message',
  },
}

export const Error: Story = {
  ...Template,
  args: {
    toastFn: toast.error,
    message: 'Error message',
  },
}

export const Success: Story = {
  ...Template,
  args: {
    toastFn: toast.success,
    message: 'Success message',
  },
}

export const Warning: Story = {
  ...Template,
  args: {
    toastFn: toast.warning,
    message: 'Warning message',
  },
}

export const Info: Story = {
  ...Template,
  args: {
    toastFn: toast.info,
    message: 'Info message',
  },
}
