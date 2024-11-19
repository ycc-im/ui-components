import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

// 创建一个包装组件来展示Calendar
const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date?: Date) => setDate(date)}
      className="rounded-md border"
      required={false}
    />
  );
};

const meta = {
  title: 'Components/Calendar 日历',
  component: CalendarDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithDefaultDate: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date?: Date) => setDate(date)}
        className="rounded-md border"
        required={false}
      />
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date?: Date) => setDate(date)}
          className="rounded-md border"
          required={false}
        />
        <div className="text-sm">
          {date ? (
            <p>选择的日期: {date.toLocaleDateString()}</p>
          ) : (
            <p>请选择一个日期</p>
          )}
        </div>
      </div>
    );
  },
};
