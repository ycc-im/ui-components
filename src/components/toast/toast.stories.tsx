import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Toaster } from './toaster';
import { useToast } from './use-toast';

// 创建一个包装组件来展示Toast
const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "预定成功",
            description: "星期五下午3点",
          });
        }}
      >
        显示通知
      </Button>
      <Toaster />
    </div>
  );
};

const meta = {
  title: 'Components/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "更新可用",
              description: "新版本已经准备就绪。",
              action: (
                <Button variant="outline" size="sm">
                  立即更新
                </Button>
              ),
            });
          }}
        >
          显示带操作的通知
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="flex flex-col gap-4">
        <Button
          variant="default"
          onClick={() => {
            toast({
              title: "默认通知",
              description: "这是一个默认通知。",
            });
          }}
        >
          默认通知
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              title: "错误",
              description: "发生了一个错误。",
              variant: "destructive",
            });
          }}
        >
          错误通知
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => {
            toast({
              title: "成功",
              description: "操作已完成。",
              variant: "success",
            });
          }}
        >
          成功通知
        </Button>
        <Button
          className="bg-yellow-500 hover:bg-yellow-600"
          onClick={() => {
            toast({
              title: "警告",
              description: "请注意这个问题。",
              variant: "warning",
            });
          }}
        >
          警告通知
        </Button>
        <Toaster />
      </div>
    );
  },
};
