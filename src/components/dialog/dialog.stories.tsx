import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

// 创建一个包装组件来展示Dialog
const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>基本对话框</DialogTitle>
          <DialogDescription>这是一个基本的对话框示例。</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const meta = {
  title: 'Components/Dialog 对话框',
  component: DialogDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">编辑个人资料</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>编辑个人资料</DialogTitle>
          <DialogDescription>在这里修改您的个人资料信息。</DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button type="submit">保存修改</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Alert: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">删除项目</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除？</DialogTitle>
          <DialogDescription>
            此操作无法撤销。这将永久删除您的项目以及所有相关数据。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">取消</Button>
          <Button variant="destructive">确认删除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
