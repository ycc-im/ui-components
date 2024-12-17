import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Plus } from 'lucide-react'

import { Button } from './Button'

const meta = {
  title: 'Components/Button 按钮',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: '主要按钮',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: '次要按钮',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: '轮廓按钮',
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    children: '危险按钮',
    variant: 'destructive',
  },
}

export const Ghost: Story = {
  args: {
    children: '幽灵按钮',
    variant: 'ghost',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        登录
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    children: '加载中...',
    disabled: true,
  },
}

export const Link: Story = {
  args: {
    children: '链接按钮',
    variant: 'link',
  },
}

// 新增宽度相关示例
export const WidthExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* 最小宽度示例 */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">默认最小宽度 (120px):</p>
        <Button>短文本</Button>
      </div>

      {/* 长文本自动扩展 */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">长文本自动扩展:</p>
        <Button>这是一个很长的按钮文本用来测试自动扩展宽度</Button>
      </div>

      {/* 全宽按钮 */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">全宽按钮:</p>
        <div className="w-full bg-slate-100 p-4 rounded-lg">
          <Button fullWidth>全宽按钮示例</Button>
        </div>
      </div>

      {/* 图标按钮 */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">图标按钮 (无最小宽度):</p>
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
按钮宽度设计说明:
- 默认最小宽度为120px，确保按钮不会过窄
- 文本较长时会自动扩展宽度，且保持文本不换行
- 支持fullWidth属性实现全宽按钮
- 图标按钮(size="icon")会移除最小宽度限制
        `,
      },
    },
  },
}
