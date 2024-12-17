import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import Textarea from './Textarea'

describe('Textarea', () => {
  it('应该正确渲染文本域', () => {
    render(<Textarea placeholder="请输入内容" />)
    const textarea = screen.getByPlaceholderText('请输入内容')
    expect(textarea).toBeDefined()
  })

  it('应该响应用户输入', () => {
    render(<Textarea />)
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: '测试内容' } })
    expect(textarea).toBeDefined()
    expect(textarea.value).toBe('测试内容')
  })

  it('应该显示错误状态', () => {
    render(<Textarea error />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('border-destructive')
  })

  it('应该支持自定义行数', () => {
    render(<Textarea rows={5} />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.getAttribute('rows')).toBe('5')
  })

  it('应该支持禁用状态', () => {
    render(<Textarea disabled />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.disabled).toBe(true)
  })
})
