import React from 'react'

import { cn } from '../../lib/utils'

export interface PaginationProps {
  /** 当前页码 */
  current: number
  /** 总页数 */
  total: number
  /** 每页显示的页码数量 */
  pageSize?: number
  /** 页码改变时的回调函数 */
  onChange?: (page: number) => void
  /** 自定义类名 */
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize = 5,
  onChange,
  className,
}) => {
  const getPageNumbers = () => {
    const pages: number[] = []
    const halfPageSize = Math.floor(pageSize / 2)
    let start = Math.max(1, current - halfPageSize)
    const end = Math.min(start + pageSize - 1, total)

    if (end - start + 1 < pageSize) {
      start = Math.max(1, end - pageSize + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const handlePageClick = (page: number) => {
    if (page !== current && onChange) {
      onChange(page)
    }
  }

  const renderPageNumbers = () => {
    const pages = getPageNumbers()

    return pages.map((page) => (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={cn(
          'px-3 py-2 mx-1 rounded-md text-sm font-medium',
          page === current ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted',
        )}
        aria-label={page.toString()}
      >
        {page}
      </button>
    ))
  }

  return (
    <nav
      className={cn('flex items-center justify-center space-x-2', className)}
      aria-label="分页导航"
    >
      <button
        onClick={() => handlePageClick(current - 1)}
        disabled={current === 1}
        className="px-3 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-background hover:bg-muted"
      >
        上一页
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageClick(current + 1)}
        disabled={current === total}
        className="px-3 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-background hover:bg-muted"
      >
        下一页
      </button>
    </nav>
  )
}
