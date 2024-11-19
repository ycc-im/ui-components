import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Calendar } from './calendar'

describe('Calendar', () => {
  it('renders correctly', () => {
    const { container } = render(<Calendar />)
    expect(container.querySelector('.rdp')).toBeDefined()
    expect(container.querySelector('.rdp-month')).toBeDefined()
  })

  it('shows outside days when showOutsideDays is true', () => {
    const { container } = render(<Calendar showOutsideDays={true} />)
    expect(container.querySelector('.day-outside')).toBeDefined()
  })

  it('hides outside days when showOutsideDays is false', () => {
    const { container } = render(<Calendar showOutsideDays={false} />)
    expect(container.querySelector('.day-outside')).toBeNull()
  })

  it('applies custom className', () => {
    const { container } = render(<Calendar className="custom-calendar" />)
    const element = container.firstChild as HTMLElement
    expect(element.className.includes('custom-calendar')).toBe(true)
  })

  it('handles date selection', () => {
    const onSelect = vi.fn()
    render(<Calendar mode="single" onSelect={onSelect} />)

    // 点击一个日期
    const dayButton = screen.getAllByRole('button')[10] // 获取一个日期按钮
    fireEvent.click(dayButton)

    expect(onSelect).toHaveBeenCalled()
  })

  it('applies custom classNames', () => {
    const customClassNames = {
      months: 'custom-months',
      month: 'custom-month',
      caption: 'custom-caption',
    }

    const { container } = render(<Calendar classNames={customClassNames} />)

    expect(container.querySelector('.custom-months')).toBeDefined()
    expect(container.querySelector('.custom-month')).toBeDefined()
    expect(container.querySelector('.custom-caption')).toBeDefined()
  })

  it('renders in different modes', () => {
    const { container: singleContainer } = render(<Calendar mode="single" />)
    expect(singleContainer.querySelector('.rdp-day_selected')).toBeNull()

    const { container: rangeContainer } = render(<Calendar mode="range" />)
    expect(rangeContainer.querySelector('.day-range-start')).toBeNull()
    expect(rangeContainer.querySelector('.day-range-end')).toBeNull()
  })
})
