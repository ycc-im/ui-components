import { ColumnDef } from '@tanstack/react-table'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { DataTable } from './data-table'

// 定义测试数据类型
interface TestData {
  id: string
  name: string
  age: number
}

// 创建测试数据
const testData: TestData[] = [
  { id: '1', name: 'John', age: 30 },
  { id: '2', name: 'Jane', age: 25 },
  { id: '3', name: 'Bob', age: 35 },
]

// 创建测试列定义
const testColumns: ColumnDef<TestData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
]

// Test wrapper component
function TestWrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

const customRender = (ui: React.ReactElement) => {
  return render(ui, {
    wrapper: TestWrapper,
  })
}

describe('DataTable', () => {
  it('renders table with data correctly', () => {
    customRender(<DataTable columns={testColumns} data={testData} />)

    // 验证表头
    expect(screen.getByText('ID')).toBeDefined()
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Age')).toBeDefined()

    // 验证数据
    expect(screen.getByText('John')).toBeDefined()
    expect(screen.getByText('30')).toBeDefined()
    expect(screen.getByText('Jane')).toBeDefined()
    expect(screen.getByText('25')).toBeDefined()
  })

  it('renders empty state correctly', () => {
    customRender(<DataTable columns={testColumns} data={[]} />)
    expect(screen.getByText('暂无数据')).toBeDefined()
  })

  it('handles custom cell rendering', () => {
    const columnsWithCustomCell: ColumnDef<TestData>[] = [
      ...testColumns,
      {
        accessorKey: 'age',
        header: 'Age',
        cell: ({ row }) => <div className="text-blue-500">{row.getValue('age')}</div>,
      },
    ]

    customRender(<DataTable columns={columnsWithCustomCell} data={testData} />)
    const ageCell = screen.getByText('30').parentElement
    expect(ageCell?.className).toContain('text-blue-500')
  })

  it('handles sorting', () => {
    customRender(<DataTable columns={testColumns} data={testData} />)

    // Click header twice for ascending sort
    const nameHeader = screen.getByText('Name')
    fireEvent.click(nameHeader)
    fireEvent.click(nameHeader)

    // Get all name cells
    const cells = screen.getAllByRole('cell')
    const names = cells.filter((cell) => ['Bob', 'Jane', 'John'].includes(cell.textContent || ''))
    
    // After ascending sort, Bob should be first
    expect(names[0]).toHaveTextContent('Bob')
  })

  it('handles column visibility', () => {
    const { container } = customRender(<DataTable columns={testColumns} data={testData} />)

    // Check if all columns are visible initially
    const headers = container.querySelectorAll('th')
    expect(headers.length).toBe(3)

    // Verify content of visible columns
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
  })

  it('handles row selection', () => {
    customRender(<DataTable columns={testColumns} data={testData} />)

    // Find and click the first row
    const firstRow = screen.getByText('John').closest('tr')
    expect(firstRow).not.toBeNull()
    
    if (firstRow) {
      fireEvent.click(firstRow)
      expect(firstRow).toHaveAttribute('data-state', 'selected')
    }
  })

  it('displays empty state when no data', () => {
    customRender(<DataTable columns={testColumns} data={[]} />)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })

  it('handles complex data structure', () => {
    interface ComplexData {
      id: string
      info: {
        name: string
        details: {
          age: number
        }
      }
    }

    const complexData: ComplexData[] = [
      {
        id: '1',
        info: {
          name: 'John',
          details: { age: 30 },
        },
      },
    ]

    const complexColumns: ColumnDef<ComplexData>[] = [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'info.name',
        header: 'Name',
      },
      {
        accessorKey: 'info.details.age',
        header: 'Age',
      },
    ]

    customRender(<DataTable columns={complexColumns} data={complexData} />)

    expect(screen.getByText('John')).toBeDefined()
    expect(screen.getByText('30')).toBeDefined()
  })

  it('handles column filters', async () => {
    const columnsWithFilter: ColumnDef<TestData>[] = [
      {
        accessorKey: 'name',
        header: ({ column }) => {
          return (
            <div>
              <div>Name</div>
              <input
                type="text"
                value={(column.getFilterValue() as string) ?? ''}
                onChange={(e) => column.setFilterValue(e.target.value)}
                className="max-w-sm"
                data-testid="name-filter"
              />
            </div>
          )
        },
        enableColumnFilter: true,
      },
    ]

    customRender(<DataTable columns={columnsWithFilter} data={testData} />)

    // Find and use the filter input
    const filterInput = screen.getByTestId('name-filter')
    fireEvent.change(filterInput, { target: { value: 'John' } })

    // Should only show John's data
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.queryByText('Jane')).not.toBeInTheDocument()
  })
})
