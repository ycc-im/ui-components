import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('渲染正确的页码按钮', () => {
    const { container } = render(<Pagination current={3} total={10} pageSize={5} />)

    // 检查是否渲染了正确的页码按钮
    ;[1, 2, 3, 4, 5].forEach((page) => {
      const element = container.querySelector(`button[aria-label="${page}"]`)
      expect(element).not.toBeNull()
      expect(element?.textContent).toBe(page.toString())
    })
  })

  it('点击页码按钮时触发onChange事件', () => {
    const handleChange = vi.fn()
    const { container } = render(<Pagination current={3} total={10} onChange={handleChange} />)

    const button = container.querySelector('button[aria-label="4"]')
    expect(button).not.toBeNull()
    if (button) {
      fireEvent.click(button)
      expect(handleChange).toHaveBeenCalledWith(4)
    }
  })

  it('禁用边界按钮', () => {
    const { container: container1 } = render(<Pagination current={1} total={5} />)
    const prevButton = container1.querySelector('button:first-child')
    expect(prevButton).not.toBeNull()
    expect(prevButton?.hasAttribute('disabled')).toBe(true)

    const { container: container2 } = render(<Pagination current={5} total={5} />)
    const nextButton = container2.querySelector('button:last-child')
    expect(nextButton).not.toBeNull()
    expect(nextButton?.hasAttribute('disabled')).toBe(true)
  })
})
