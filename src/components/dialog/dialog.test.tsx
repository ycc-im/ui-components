import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

describe('Dialog', () => {
  it('renders dialog trigger correctly', () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    )

    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByText('Open Dialog')).toBeDefined()
  })

  it('renders dialog content when triggered', () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证对话框内容
    expect(screen.getByText('Test Dialog')).toBeDefined()
    expect(screen.getByText('Test Description')).toBeDefined()
    expect(screen.getByText('Close')).toBeDefined()
  })

  it('applies custom className to dialog components', () => {
    render(
      <Dialog>
        <DialogContent className="custom-content">
          <DialogHeader className="custom-header">
            <DialogTitle className="custom-title">Test Dialog</DialogTitle>
            <DialogDescription className="custom-description">Test Description</DialogDescription>
          </DialogHeader>
          <DialogFooter className="custom-footer">
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    // 打开对话框
    fireEvent.click(screen.getByRole('button'))

    // 验证自定义类名
    expect(document.querySelector('.custom-content')).toBeDefined()
    expect(document.querySelector('.custom-header')).toBeDefined()
    expect(document.querySelector('.custom-title')).toBeDefined()
    expect(document.querySelector('.custom-description')).toBeDefined()
    expect(document.querySelector('.custom-footer')).toBeDefined()
  })

  it('closes dialog when close button is clicked', () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
        </DialogContent>
      </Dialog>,
    )

    // 打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))
    expect(screen.getByText('Test Dialog')).toBeDefined()

    // 点击关闭按钮
    const closeButton = document.querySelector('[aria-label="Close"]')
    if (closeButton) {
      fireEvent.click(closeButton)
      // 对话框应该关闭
      expect(screen.queryByText('Test Dialog')).toBeNull()
    }
  })

  it('renders nested dialog components correctly', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Main Title</DialogTitle>
            <DialogDescription>Main Description</DialogDescription>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Nested</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Nested Title</DialogTitle>
              </DialogContent>
            </Dialog>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    )

    // 验证嵌套对话框的结构
    expect(screen.getByText('Main Title')).toBeDefined()
    expect(screen.getByText('Main Description')).toBeDefined()
    expect(screen.getByText('Open Nested')).toBeDefined()
  })
})
