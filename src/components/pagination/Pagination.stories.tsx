import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: { type: 'number', min: 1 },
      description: '当前页码',
    },
    total: {
      control: { type: 'number', min: 1 },
      description: '总页数',
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: '每页显示的页码数量',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    current: 1,
    total: 10,
    pageSize: 5,
  },
}

export const WithInteraction = () => {
  const [current, setCurrent] = useState(1)
  return <Pagination current={current} total={10} onChange={(page) => setCurrent(page)} />
}

export const CustomPageSize: Story = {
  args: {
    current: 5,
    total: 20,
    pageSize: 7,
  },
}
