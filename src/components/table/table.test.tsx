import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table'

describe('Table', () => {
  it('renders table correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    
    expect(screen.getByRole('table')).toBeDefined()
    expect(screen.getByText('Header')).toBeDefined()
    expect(screen.getByText('Cell')).toBeDefined()
  })

  it('renders caption correctly', () => {
    render(
      <Table>
        <TableCaption>Table Caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText('Table Caption')).toBeDefined()
  })

  it('renders footer correctly', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(screen.getByText('Footer')).toBeDefined()
  })

  it('applies custom className to table components', () => {
    render(
      <Table className="custom-table">
        <TableHeader className="custom-header">
          <TableRow className="custom-row">
            <TableHead className="custom-head">Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="custom-body">
          <TableRow className="custom-row">
            <TableCell className="custom-cell">Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className="custom-footer">
          <TableRow className="custom-row">
            <TableCell className="custom-cell">Footer</TableCell>
          </TableRow>
        </TableFooter>
        <TableCaption className="custom-caption">Caption</TableCaption>
      </Table>
    )

    // 验证自定义类名
    const table = screen.getByRole('table')
    expect(table.className).toContain('custom-table')

    const header = table.querySelector('thead')
    expect(header?.className).toContain('custom-header')

    const body = table.querySelector('tbody')
    expect(body?.className).toContain('custom-body')

    const footer = table.querySelector('tfoot')
    expect(footer?.className).toContain('custom-footer')

    const caption = table.querySelector('caption')
    expect(caption?.className).toContain('custom-caption')

    const rows = table.querySelectorAll('tr')
    rows.forEach(row => {
      expect(row.className).toContain('custom-row')
    })

    const head = table.querySelector('th')
    expect(head?.className).toContain('custom-head')

    const cells = table.querySelectorAll('td')
    cells.forEach(cell => {
      expect(cell.className).toContain('custom-cell')
    })
  })

  it('handles complex table structure', () => {
    render(
      <Table>
        <TableCaption>Complex Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>30</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total: 2 employees</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(screen.getByText('Complex Table')).toBeDefined()
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Age')).toBeDefined()
    expect(screen.getByText('Role')).toBeDefined()
    expect(screen.getByText('John')).toBeDefined()
    expect(screen.getByText('30')).toBeDefined()
    expect(screen.getByText('Developer')).toBeDefined()
    expect(screen.getByText('Jane')).toBeDefined()
    expect(screen.getByText('25')).toBeDefined()
    expect(screen.getByText('Designer')).toBeDefined()
    expect(screen.getByText('Total: 2 employees')).toBeDefined()
  })

  it('handles empty table', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody />
      </Table>
    )

    expect(screen.getByRole('table')).toBeDefined()
    expect(screen.getByText('Header')).toBeDefined()
  })
})
