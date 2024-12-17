import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const Required: Story = {
  args: {
    children: 'Label *',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="h-10 rounded-md px-3 py-2 text-sm ring-1 ring-gray-200"
      />
    </div>
  ),
}
