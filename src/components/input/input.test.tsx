import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  it('renders input correctly', () => {
    render(<Input placeholder="Test input" />)
    expect(screen.getByPlaceholderText('Test input')).toBeDefined()
  })

  it('handles different input types', () => {
    const { rerender } = render(<Input type="text" />)
    expect(screen.getByRole('textbox')).toBeDefined()

    rerender(<Input type="password" />)
    const passwordInput = screen.getByRole('textbox') as HTMLInputElement
    expect(passwordInput.type).toBe('password')

    rerender(<Input type="number" />)
    expect(screen.getByRole('spinbutton')).toBeDefined()

    rerender(<Input type="email" />)
    const emailInput = screen.getByRole('textbox') as HTMLInputElement
    expect(emailInput.type).toBe('email')
  })

  it('handles disabled state', () => {
    render(<Input disabled />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.disabled).toBe(true)
    expect(input.className).toContain('disabled:cursor-not-allowed')
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" />)
    const input = screen.getByRole('textbox')
    expect(input.className).toContain('custom-class')
  })

  it('handles value changes', () => {
    render(<Input />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    
    fireEvent.change(input, { target: { value: 'test value' } })
    expect(input.value).toBe('test value')
  })

  it('handles events', () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    const onChange = vi.fn()
    
    render(
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    )
    
    const input = screen.getByRole('textbox')
    
    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalled()
    
    fireEvent.change(input, { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalled()
    
    fireEvent.blur(input)
    expect(onBlur).toHaveBeenCalled()
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Input ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('handles file input', () => {
    render(<Input type="file" />)
    const input = screen.getByRole('textbox', { hidden: true }) as HTMLInputElement
    expect(input.type).toBe('file')
    expect(input.className).toContain('file:border-0')
  })

  it('handles required attribute', () => {
    render(<Input required />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.required).toBe(true)
  })

  it('handles readonly attribute', () => {
    render(<Input readOnly value="readonly value" />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.readOnly).toBe(true)
    expect(input.value).toBe('readonly value')
  })
})
