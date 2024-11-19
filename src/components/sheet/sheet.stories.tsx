import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

// 创建一个包装组件来展示Sheet
const SheetDemo = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">打开抽屉</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>编辑个人资料</SheetTitle>
          <SheetDescription>在这里修改您的个人资料信息。</SheetDescription>
        </SheetHeader>
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
        <SheetFooter>
          <Button type="submit">保存修改</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const meta = {
  title: 'Components/Sheet 抽屉',
  component: SheetDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SheetDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">从右侧打开</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>右侧抽屉</SheetTitle>
            <SheetDescription>这是一个从右侧滑出的抽屉。</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">从左侧打开</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>左侧抽屉</SheetTitle>
            <SheetDescription>这是一个从左侧滑出的抽屉。</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">从顶部打开</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>顶部抽屉</SheetTitle>
            <SheetDescription>这是一个从顶部滑出的抽屉。</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">从底部打开</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>底部抽屉</SheetTitle>
            <SheetDescription>这是一个从底部滑出的抽屉。</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">编辑设置</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>编辑设置</SheetTitle>
          <SheetDescription>修改您的应用程序设置。</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="notifications" />
            <label htmlFor="notifications">启用通知</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="newsletter" defaultChecked />
            <label htmlFor="newsletter">订阅新闻通讯</label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="theme" className="text-right">
              主题
            </label>
            <select id="theme" className="col-span-3 h-9 rounded-md border px-3">
              <option value="light">浅色</option>
              <option value="dark">深色</option>
              <option value="system">跟随系统</option>
            </select>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">保存设置</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
