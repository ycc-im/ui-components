import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable } from './data-table'
import { ColumnDef } from '@tanstack/react-table'

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

describe('DataTable', () => {
  it('renders table with data correctly', () => {
    render(<DataTable columns={testColumns} data={testData} />)
    
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
    render(<DataTable columns={testColumns} data={[]} />)
    expect(screen.getByText('暂无数据')).toBeDefined()
  })

  it('handles custom cell rendering', () => {
    const columnsWithCustomCell: ColumnDef<TestData>[] = [
      ...testColumns,
      {
        accessorKey: 'age',
        header: 'Age',
        cell: ({ row }) => (
          <div className="text-blue-500">{row.getValue('age')}</div>
        ),
      },
    ]

    render(<DataTable columns={columnsWithCustomCell} data={testData} />)
    const ageCell = screen.getByText('30').parentElement
    expect(ageCell?.className).toContain('text-blue-500')
  })

  it('handles row selection', () => {
    render(<DataTable columns={testColumns} data={testData} />)
    
    // 点击行
    const row = screen.getByText('John').closest('tr')
    if (row) {
      fireEvent.click(row)
      expect(row.getAttribute('data-state')).toBe('selected')
    }
  })

  it('handles sorting', () => {
    render(<DataTable columns={testColumns} data={testData} />)
    
    // 点击表头进行排序
    const nameHeader = screen.getByText('Name')
    fireEvent.click(nameHeader)

    // 验证排序后的顺序
    const cells = screen.getAllByRole('cell')
    const names = cells.filter(cell => ['Bob', 'Jane', 'John'].includes(cell.textContent || ''))
    expect(names[0].textContent).toBe('Bob')
  })

  it('handles column visibility', () => {
    const { container } = render(<DataTable columns={testColumns} data={testData} />)
    
    // 默认应该显示所有列
    const headers = container.querySelectorAll('th')
    expect(headers.length).toBe(3)
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

    render(<DataTable columns={complexColumns} data={complexData} />)
    
    expect(screen.getByText('John')).toBeDefined()
    expect(screen.getByText('30')).toBeDefined()
  })

  it('handles column filters', () => {
    const columnsWithFilter: ColumnDef<TestData>[] = [
      {
        accessorKey: 'name',
        header: 'Name',
        enableColumnFilter: true,
      },
    ]

    render(<DataTable columns={columnsWithFilter} data={testData} />)
    
    // 验证过滤功能
    const filterInput = screen.getByPlaceholderText('Filter...')
    fireEvent.change(filterInput, { target: { value: 'John' } })

    // 应该只显示John的数据
    expect(screen.getByText('John')).toBeDefined()
    expect(screen.queryByText('Jane')).toBeNull()
  })
})
