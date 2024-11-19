import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastProvider,
  ToastViewport,
} from './toast'
import { useToast } from './use-toast'
import { Button } from '../button'

// 创建一个测试组件来使用useToast
const TestComponent = () => {
  const { toast } = useToast()
  return (
    <Button onClick={() => toast({ title: 'Test Toast' })}>
      Show Toast
    </Button>
  )
}

describe('Toast', () => {
  it('renders toast components correctly', () => {
    render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Test Title</ToastTitle>
          <ToastDescription>Test Description</ToastDescription>
          <ToastAction altText="test">
            <Button>Action</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )

    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('Test Description')).toBeDefined()
    expect(screen.getByText('Action')).toBeDefined()
    expect(screen.getByRole('button', { name: /close/i })).toBeDefined()
  })

  it('applies variant styles correctly', () => {
    const { container } = render(
      <ToastProvider>
        <Toast variant="default">Default Toast</Toast>
        <Toast variant="destructive">Destructive Toast</Toast>
        <Toast variant="success">Success Toast</Toast>
        <Toast variant="warning">Warning Toast</Toast>
      </ToastProvider>
    )

    const toasts = container.querySelectorAll('[role="status"]')
    expect(toasts[0].className).toContain('bg-background')
    expect(toasts[1].className).toContain('bg-destructive')
    expect(toasts[2].className).toContain('bg-green-500')
    expect(toasts[3].className).toContain('bg-yellow-500')
  })

  it('handles close action', () => {
    const onOpenChange = vi.fn()
    
    render(
      <ToastProvider>
        <Toast onOpenChange={onOpenChange}>
          <ToastTitle>Test Toast</ToastTitle>
          <ToastClose />
        </Toast>
      </ToastProvider>
    )

    // 点击关闭按钮
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('handles action click', () => {
    const onAction = vi.fn()
    
    render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Test Toast</ToastTitle>
          <ToastAction altText="test" onClick={onAction}>
            <Button>Action</Button>
          </ToastAction>
        </Toast>
      </ToastProvider>
    )

    // 点击操作按钮
    fireEvent.click(screen.getByText('Action'))
    expect(onAction).toHaveBeenCalled()
  })

  it('useToast hook works correctly', () => {
    render(
      <ToastProvider>
        <TestComponent />
        <ToastViewport />
      </ToastProvider>
    )

    // 点击显示Toast
    fireEvent.click(screen.getByText('Show Toast'))

    // 验证Toast显示
    expect(screen.getByText('Test Toast')).toBeDefined()
  })

  it('handles multiple toasts', () => {
    const TestMultipleToasts = () => {
      const { toast } = useToast()
      return (
        <Button 
          onClick={() => {
            toast({ title: 'Toast 1' })
            toast({ title: 'Toast 2' })
          }}
        >
          Show Toasts
        </Button>
      )
    }

    render(
      <ToastProvider>
        <TestMultipleToasts />
        <ToastViewport />
      </ToastProvider>
    )

    // 点击显示多个Toast
    fireEvent.click(screen.getByText('Show Toasts'))

    // 验证Toast显示
    expect(screen.getByText('Toast 1')).toBeDefined()
    expect(screen.getByText('Toast 2')).toBeDefined()
  })

  it('handles toast dismiss', () => {
    const TestDismissToast = () => {
      const { toast, dismiss } = useToast()
      return (
        <>
          <Button onClick={() => {
            const { id } = toast({ title: 'Dismissible Toast' })
            setTimeout(() => dismiss(id), 0)
          }}>
            Show Toast
          </Button>
        </>
      )
    }

    render(
      <ToastProvider>
        <TestDismissToast />
        <ToastViewport />
      </ToastProvider>
    )

    // 点击显示Toast
    fireEvent.click(screen.getByText('Show Toast'))

    // 验证Toast被关闭
    act(() => {
      vi.runAllTimers()
    })
    
    expect(screen.queryByText('Dismissible Toast')).toBeNull()
  })
})
