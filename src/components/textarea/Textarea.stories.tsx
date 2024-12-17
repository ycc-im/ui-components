import type { Meta, StoryObj } from '@storybook/react'
import Textarea from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '请输入内容...',
  },
}

export const WithError: Story = {
  args: {
    error: true,
    defaultValue: '这是一个错误状态的文本域',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '这是一个禁用状态的文本域',
  },
}

export const CustomRows: Story = {
  args: {
    rows: 5,
    placeholder: '这是一个自定义行数的文本域',
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
    placeholder: '这是一个限制最大长度的文本域',
  },
}
