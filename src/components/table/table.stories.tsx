import type { Meta, StoryObj } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './Table'

const meta = {
  title: 'Components/Table 表格',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: '已支付',
    totalAmount: '¥250.00',
    paymentMethod: '支付宝',
  },
  {
    invoice: 'INV002',
    paymentStatus: '待支付',
    totalAmount: '¥150.00',
    paymentMethod: '微信支付',
  },
  {
    invoice: 'INV003',
    paymentStatus: '待支付',
    totalAmount: '¥350.00',
    paymentMethod: '银行卡',
  },
  {
    invoice: 'INV004',
    paymentStatus: '已支付',
    totalAmount: '¥450.00',
    paymentMethod: '支付宝',
  },
  {
    invoice: 'INV005',
    paymentStatus: '已支付',
    totalAmount: '¥550.00',
    paymentMethod: '微信支付',
  },
]

export const Basic: Story = {
  render: () => (
    <Table>
      <TableCaption>近期订单列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>订单号</TableHead>
          <TableHead>支付状态</TableHead>
          <TableHead>金额</TableHead>
          <TableHead>支付方式</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>订单号</TableHead>
          <TableHead>支付状态</TableHead>
          <TableHead>金额</TableHead>
          <TableHead>支付方式</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>总计</TableCell>
          <TableCell>¥1,750.00</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const CustomStyle: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="text-primary-foreground">订单号</TableHead>
          <TableHead className="text-primary-foreground">支付状态</TableHead>
          <TableHead className="text-primary-foreground">金额</TableHead>
          <TableHead className="text-primary-foreground">支付方式</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell
              className={invoice.paymentStatus === '已支付' ? 'text-green-500' : 'text-orange-500'}
            >
              {invoice.paymentStatus}
            </TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <input type="checkbox" className="translate-y-[2px]" />
          </TableHead>
          <TableHead>订单号</TableHead>
          <TableHead>支付状态</TableHead>
          <TableHead>金额</TableHead>
          <TableHead>支付方式</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <input type="checkbox" className="translate-y-[2px]" />
            </TableCell>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
