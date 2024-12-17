import type { Meta, StoryObj } from '@storybook/react'

import { Combobox } from './Combobox'

const meta = {
  title: 'Components/Combobox 组合框',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof Combobox>

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

export const Basic: Story = {
  args: {
    options: frameworks,
    placeholder: '选择框架...',
    emptyMessage: '未找到结果',
  },
}

export const WithPreselectedValue: Story = {
  args: {
    options: frameworks,
    value: 'react',
    placeholder: '选择框架...',
    emptyMessage: '未找到结果',
  },
}

const languages = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'cpp', label: 'C++' },
]

export const LongList: Story = {
  args: {
    options: languages,
    placeholder: '选择编程语言...',
    emptyMessage: '未找到语言',
  },
}

export const CustomStyling: Story = {
  args: {
    options: frameworks,
    placeholder: '选择框架...',
    emptyMessage: '未找到结果',
    className: 'w-[300px]',
  },
}
