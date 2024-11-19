import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

describe('Sheet', () => {
  it('renders trigger correctly', () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <p>Sheet Content</p>
        </SheetContent>
      </Sheet>,
    )

    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByText('Open Sheet')).toBeDefined()
  })

  it('shows content when triggered', () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <p>Sheet Content</p>
        </SheetContent>
      </Sheet>,
    )

    // 点击触发器打开抽屉
    fireEvent.click(screen.getByText('Open Sheet'))

    // 验证内容显示
    expect(screen.getByText('Sheet Content')).toBeDefined()
  })

  it('renders with different positions', () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <p>Left Content</p>
        </SheetContent>
      </Sheet>,
    )

    // 点击触发器打开抽屉
    fireEvent.click(screen.getByText('Open Sheet'))

    // 验证位置属性
    const content = container.querySelector('[data-state="open"]')
    expect(content?.className).toContain('left-0')
  })

  it('renders header and footer correctly', () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Test Title</SheetTitle>
            <SheetDescription>Test Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    )

    // 点击触发器打开抽屉
    fireEvent.click(screen.getByText('Open Sheet'))

    // 验证标题和描述
    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('Test Description')).toBeDefined()
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('applies custom className', () => {
    render(
      <Sheet>
        <SheetTrigger className="custom-trigger">Open Sheet</SheetTrigger>
        <SheetContent className="custom-content">
          <SheetHeader className="custom-header">
            <SheetTitle className="custom-title">Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    )

    const trigger = screen.getByText('Open Sheet') as HTMLElement
    expect(trigger.className.includes('custom-trigger')).toBe(true)
  })

  it('closes when close button is clicked', () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <p>Sheet Content</p>
        </SheetContent>
      </Sheet>,
    )

    // 打开抽屉
    fireEvent.click(screen.getByText('Open Sheet'))
    expect(screen.getByText('Sheet Content')).toBeDefined()

    // 点击关闭按钮
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    // 验证内容已关闭
    expect(screen.queryByText('Sheet Content')).toBeNull()
  })
})
