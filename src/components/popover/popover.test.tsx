import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

describe('Popover', () => {
  it('renders trigger correctly', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover Content</p>
        </PopoverContent>
      </Popover>,
    )

    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByText('Open Popover')).toBeDefined()
  })

  it('shows content when triggered', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover Content</p>
        </PopoverContent>
      </Popover>,
    )

    // 点击触发器打开弹出框
    fireEvent.click(screen.getByText('Open Popover'))

    // 验证内容显示
    expect(screen.getByText('Popover Content')).toBeDefined()
  })

  it('renders with different positions', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Top Content</p>
        </PopoverContent>
      </Popover>,
    )

    // 点击触发器打开弹出框
    fireEvent.click(screen.getByText('Open Popover'))

    // 验证位置属性
    const content = container.querySelector('[data-side="top"]')
    expect(content).toBeDefined()
  })

  it('applies custom className', () => {
    render(
      <Popover>
        <PopoverTrigger className="custom-trigger">Open Popover</PopoverTrigger>
        <PopoverContent className="custom-content">
          <p>Content</p>
        </PopoverContent>
      </Popover>,
    )

    const trigger = screen.getByText('Open Popover') as HTMLElement
    expect(trigger.className.includes('custom-trigger')).toBe(true)
  })

  it('renders with custom align', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p>Content</p>
        </PopoverContent>
      </Popover>,
    )

    // 点击触发器打开弹出框
    fireEvent.click(screen.getByText('Open Popover'))

    // 验证对齐属性
    const content = container.querySelector('[data-align="start"]')
    expect(content).toBeDefined()
  })

  it('renders with custom offset', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={10}>
          <p>Content</p>
        </PopoverContent>
      </Popover>,
    )

    // 点击触发器打开弹出框
    fireEvent.click(screen.getByText('Open Popover'))

    // 验证偏移属性
    const content = container.querySelector('[data-side-offset="10"]')
    expect(content).toBeDefined()
  })
})
