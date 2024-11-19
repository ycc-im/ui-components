import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Components/Input 输入框',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: '请输入文本...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">
        邮箱
      </label>
      <Input type="email" id="email" placeholder="example@example.com" />
      <p className="text-sm text-muted-foreground">
        请输入您的邮箱地址。
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: 'text',
    disabled: true,
    placeholder: '禁用状态',
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative">
      <Input type="search" placeholder="搜索..." />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  ),
};

export const File: Story = {
  args: {
    type: 'file',
    className: 'cursor-pointer',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '请输入密码...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '请输入数字...',
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="error" className="text-sm font-medium">
        错误状态
      </label>
      <Input
        type="email"
        id="error"
        placeholder="example@example.com"
        className="border-red-500"
      />
      <p className="text-sm text-red-500">
        请输入有效的邮箱地址。
      </p>
    </div>
  ),
};
