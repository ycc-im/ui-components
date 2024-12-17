import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    // Default args
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Checkbox {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...args} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  ),
}

export const Checked: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Checkbox defaultChecked {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Checkbox disabled {...args} />
    </div>
  ),
}

export const DisabledChecked: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Checkbox disabled defaultChecked {...args} />
    </div>
  ),
}

export const FormExample: Story = {
  render: (args: React.ComponentProps<typeof Checkbox>) => (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" {...args} />
          <label
            htmlFor="newsletter"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" {...args} />
          <label
            htmlFor="marketing"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Receive marketing emails
          </label>
        </div>
      </form>
    </div>
  ),
}
