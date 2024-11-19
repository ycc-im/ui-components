import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './data-table';
import { ColumnDef } from '@tanstack/react-table';

// 定义示例数据类型
interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

// 创建示例数据
const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "573e1d42",
    amount: 150,
    status: "success",
    email: "test@example.com",
  },
  {
    id: "623e1d42",
    amount: 175,
    status: "failed",
    email: "demo@example.com",
  },
];

// 创建一个包装组件来展示DataTable
const DataTableDemo = () => {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "交易ID",
    },
    {
      accessorKey: "amount",
      header: "金额",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("zh-CN", {
          style: "currency",
          currency: "CNY",
        }).format(amount);
        return formatted;
      },
    },
    {
      accessorKey: "status",
      header: "状态",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div className={`capitalize ${
            status === 'success' ? 'text-green-600' :
            status === 'processing' ? 'text-blue-600' :
            status === 'failed' ? 'text-red-600' :
            'text-yellow-600'
          }`}>
            {status}
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "邮箱",
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

const meta = {
  title: 'Components/DataTable 数据表格',
  component: DataTableDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithSorting: Story = {
  render: () => {
    const columns: ColumnDef<Payment>[] = [
      {
        accessorKey: "id",
        header: "交易ID",
      },
      {
        accessorKey: "amount",
        header: "金额",
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"));
          const formatted = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY",
          }).format(amount);
          return formatted;
        },
      },
      {
        accessorKey: "status",
        header: "状态",
      },
      {
        accessorKey: "email",
        header: "邮箱",
      },
    ];

    return <DataTable columns={columns} data={data} />;
  },
};

export const Empty: Story = {
  render: () => {
    const columns: ColumnDef<Payment>[] = [
      {
        accessorKey: "id",
        header: "交易ID",
      },
      {
        accessorKey: "amount",
        header: "金额",
      },
      {
        accessorKey: "status",
        header: "状态",
      },
      {
        accessorKey: "email",
        header: "邮箱",
      },
    ];

    return <DataTable columns={columns} data={[]} />;
  },
};
