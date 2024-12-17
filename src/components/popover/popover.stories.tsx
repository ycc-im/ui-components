import type { Meta, StoryObj } from '@storybook/react'
import { Settings2 } from 'lucide-react'

import { Button } from '../Button'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

// 创建一个包装组件来展示Popover
const PopoverDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">打开弹出框</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">尺寸</h4>
            <p className="text-sm text-muted-foreground">设置元素的尺寸</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm">
                宽度
              </label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm">
                高度
              </label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: 'Components/Popover 弹窗框',
  component: PopoverDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithSettings: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">设置</h4>
            <p className="text-sm text-muted-foreground">管理您的通知设置</p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notifications" />
              <label htmlFor="notifications" className="text-sm">
                启用通知
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sounds" defaultChecked />
              <label htmlFor="sounds" className="text-sm">
                启用声音
              </label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">上方</Button>
        </PopoverTrigger>
        <PopoverContent className="w-40" side="top">
          <p className="text-sm">这是一个弹出框</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">右侧</Button>
        </PopoverTrigger>
        <PopoverContent className="w-40" side="right">
          <p className="text-sm">这是一个弹出框</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">下方</Button>
        </PopoverTrigger>
        <PopoverContent className="w-40" side="bottom">
          <p className="text-sm">这是一个弹出框</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">左侧</Button>
        </PopoverTrigger>
        <PopoverContent className="w-40" side="left">
          <p className="text-sm">这是一个弹出框</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
