import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeDefined()
  })

  it('applies default variant styles', () => {
    const { container } = render(<Button>Default Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('bg-primary')
  })

  it('applies secondary variant styles', () => {
    const { container } = render(<Button variant="secondary">Secondary Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('bg-secondary')
  })

  it('applies destructive variant styles', () => {
    const { container } = render(<Button variant="destructive">Destructive Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('bg-destructive')
  })

  it('applies outline variant styles', () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('border-input')
  })

  it('applies ghost variant styles', () => {
    const { container } = render(<Button variant="ghost">Ghost Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('hover:bg-accent')
  })

  it('applies link variant styles', () => {
    const { container } = render(<Button variant="link">Link Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('text-primary')
  })

  it('applies different size styles', () => {
    const { container: container1 } = render(<Button size="sm">Small Button</Button>)
    const button1 = container1.firstChild as HTMLElement
    expect(button1.className).toContain('h-8')

    const { container: container2 } = render(<Button size="default">Default Button</Button>)
    const button2 = container2.firstChild as HTMLElement
    expect(button2.className).toContain('h-9')

    const { container: container3 } = render(<Button size="lg">Large Button</Button>)
    const button3 = container3.firstChild as HTMLElement
    expect(button3.className).toContain('h-10')

    const { container: container4 } = render(<Button size="icon">Icon Button</Button>)
    const button4 = container4.firstChild as HTMLElement
    expect(button4.className).toContain('h-9 w-9')
  })

  it('merges custom className with default styles', () => {
    const { container } = render(<Button className="custom-class">Custom Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('custom-class')
    expect(button.className).toContain('bg-primary') // 仍然保留默认样式
  })

  it('renders as a different element when asChild is true', () => {
    const { container } = render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>,
    )
    expect(container.querySelector('a')).toBeDefined()
  })

  // 新增测试用例
  it('has minimum width by default', () => {
    const { container } = render(<Button>Short</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('min-w-[120px]')
  })

  it('applies full width when fullWidth is true', () => {
    const { container } = render(<Button fullWidth>Full Width Button</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('w-full')
  })

  it('icon button should not have minimum width', () => {
    const { container } = render(<Button size="icon">+</Button>)
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('min-w-0')
  })

  it('prevents text wrapping', () => {
    const { container } = render(
      <Button>This is a very long button text that should not wrap</Button>,
    )
    const button = container.firstChild as HTMLElement
    expect(button.className).toContain('whitespace-nowrap')
  })
})
