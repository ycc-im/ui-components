import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {},
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" disabled />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms
      </label>
    </div>
  ),
}

export const WithText: Story = {
  args: {},
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
}
