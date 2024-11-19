import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '../button'
import { SimpleDialog } from './simple-dialog'

describe('SimpleDialog', () => {
  it('renders trigger correctly', () => {
    render(<SimpleDialog trigger={<Button>Open Dialog</Button>}>Content</SimpleDialog>)

    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByText('Open Dialog')).toBeDefined()
  })

  it('shows content when triggered', () => {
    render(
      <SimpleDialog trigger={<Button>Open Dialog</Button>} title="Test Title">
        Test Content
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证内容显示
    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('Test Content')).toBeDefined()
  })

  it('handles cancel and confirm actions', () => {
    const onConfirm = vi.fn()

    render(
      <SimpleDialog
        trigger={<Button>Open Dialog</Button>}
        cancelText="Cancel"
        confirmText="Confirm"
        onConfirm={onConfirm}
      >
        Content
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证按钮显示
    expect(screen.getByText('Cancel')).toBeDefined()
    expect(screen.getByText('Confirm')).toBeDefined()

    // 点击确认按钮
    fireEvent.click(screen.getByText('Confirm'))
    expect(onConfirm).toHaveBeenCalled()
  })

  it('shows loading state', () => {
    render(
      <SimpleDialog trigger={<Button>Open Dialog</Button>} confirmText="Save" isLoading={true}>
        Content
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证加载状态
    const confirmButton = screen.getByText('Save').parentElement as HTMLElement
    expect(confirmButton.hasAttribute('disabled')).toBe(true)
    expect(screen.getByRole('status')).toBeDefined() // Loader2 icon
  })

  it('displays tips correctly', () => {
    render(
      <SimpleDialog trigger={<Button>Open Dialog</Button>} tips="Important tip">
        Content
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证提示信息
    expect(screen.getByText('Important tip')).toBeDefined()
  })

  it('renders custom content', () => {
    const CustomContent = () => (
      <div className="custom-content">
        <input placeholder="Enter name" />
      </div>
    )

    render(
      <SimpleDialog trigger={<Button>Open Dialog</Button>} title="Custom Form">
        <CustomContent />
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    // 验证自定义内容
    expect(screen.getByPlaceholderText('Enter name')).toBeDefined()
  })

  it('applies custom className', () => {
    render(
      <SimpleDialog trigger={<Button>Open Dialog</Button>} className="custom-dialog">
        Content
      </SimpleDialog>,
    )

    // 点击触发器打开对话框
    fireEvent.click(screen.getByText('Open Dialog'))

    const dialog = screen.getByRole('dialog')
    expect(dialog.className.includes('custom-dialog')).toBe(true)
  })
})
