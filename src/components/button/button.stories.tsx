import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Mail } from "lucide-react";

const meta = {
  title: 'Components/Button 按钮',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '主要按钮',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: '次要按钮',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: '轮廓按钮',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: '危险按钮',
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    children: '幽灵按钮',
    variant: 'ghost',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        登录
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: '加载中...',
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    children: '链接按钮',
    variant: 'link',
  },
};
