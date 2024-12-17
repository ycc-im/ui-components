import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { SimpleDialog } from './SimpleDialog'

const meta = {
  title: 'Components/SimpleDialog 简单对话框',
  component: SimpleDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleDialog>

export default meta
type Story = StoryObj<typeof SimpleDialog>

export const Basic: Story = {
  args: {
    trigger: <Button>打开对话框</Button>,
    title: '确认操作',
    children: '您确定要执行此操作吗？',
    cancelText: '取消',
    confirmText: '确认',
  },
}

export const DeleteAlert: Story = {
  args: {
    trigger: <Button variant="destructive">删除项目</Button>,
    title: '删除确认',
    children: '您确定要删除此项目吗？此操作无法撤销。',
    cancelText: '取消',
    confirmText: '删除',
    variant: 'delete',
    tips: '删除后的数据将无法恢复，请谨慎操作。',
  },
}

export const WithTips: Story = {
  args: {
    trigger: <Button>打开对话框</Button>,
    title: '删除账户',
    children: '此操作将永久删除您的账户，所有数据将无法恢复。',
    cancelText: '取消',
    confirmText: '删除',
    tips: '删除账户后，您需要重新注册才能使用我们的服务。',
  },
}

export const WithLoading: Story = {
  args: {
    trigger: <Button>打开对话框</Button>,
    title: '保存更改',
    children: '您确定要保存这些更改吗？',
    cancelText: '取消',
    confirmText: '保存',
    isLoading: true,
  },
}

export const CustomContent: Story = {
  args: {
    trigger: <Button variant="outline">编辑个人资料</Button>,
    title: '编辑个人资料',
    children: (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-right">
            姓名
          </label>
          <input
            id="name"
            className="col-span-3 h-9 rounded-md border px-3"
            placeholder="请输入姓名"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="email" className="text-right">
            邮箱
          </label>
          <input
            id="email"
            className="col-span-3 h-9 rounded-md border px-3"
            placeholder="请输入邮箱"
          />
        </div>
      </div>
    ),
    cancelText: '取消',
    confirmText: '保存',
  },
}
