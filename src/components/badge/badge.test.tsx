import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './badge'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeDefined()
  })

  it('applies default variant styles', () => {
    const { container } = render(<Badge>Default Badge</Badge>)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toContain('bg-primary')
  })

  it('applies secondary variant styles', () => {
    const { container } = render(<Badge variant="secondary">Secondary Badge</Badge>)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toContain('bg-secondary')
  })

  it('applies destructive variant styles', () => {
    const { container } = render(<Badge variant="destructive">Destructive Badge</Badge>)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toContain('bg-destructive')
  })

  it('applies outline variant styles', () => {
    const { container } = render(<Badge variant="outline">Outline Badge</Badge>)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toContain('text-foreground')
  })

  it('merges custom className with default styles', () => {
    const { container } = render(<Badge className="custom-class">Custom Badge</Badge>)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toContain('custom-class')
    expect(badge.className).toContain('bg-primary') // 仍然保留默认样式
  })
})
