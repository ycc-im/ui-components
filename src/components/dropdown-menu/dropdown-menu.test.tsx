import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from './dropdown-menu'
import { Button } from '../button'

describe('DropdownMenu', () => {
  it('renders trigger button correctly', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
    
    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByText('Open Menu')).toBeDefined()
  })

  it('shows content when triggered', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // 点击触发器打开菜单
    fireEvent.click(screen.getByText('Open Menu'))

    // 验证菜单内容
    expect(screen.getByText('Menu Label')).toBeDefined()
    expect(screen.getByText('Item 1')).toBeDefined()
  })

  it('handles checkbox items correctly', () => {
    const onCheckedChange = vi.fn()
    
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={true}
            onCheckedChange={onCheckedChange}
          >
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // 点击触发器打开菜单
    fireEvent.click(screen.getByText('Open Menu'))

    // 点击复选框项
    fireEvent.click(screen.getByText('Checkbox Item'))
    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('handles radio group correctly', () => {
    const onValueChange = vi.fn()
    
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // 点击触发器打开菜单
    fireEvent.click(screen.getByText('Open Menu'))

    // 点击单选项
    fireEvent.click(screen.getByText('Option 2'))
    expect(onValueChange).toHaveBeenCalledWith('option2')
  })

  it('renders submenu correctly', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // 点击触发器打开菜单
    fireEvent.click(screen.getByText('Open Menu'))

    // 验证子菜单触发器
    expect(screen.getByText('More Options')).toBeDefined()
  })

  it('renders shortcuts correctly', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            New File
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // 点击触发器打开菜单
    fireEvent.click(screen.getByText('Open Menu'))

    // 验证快捷键显示
    expect(screen.getByText('⌘N')).toBeDefined()
  })

  it('applies custom className to menu components', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger className="custom-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className="custom-content">
          <DropdownMenuItem className="custom-item">Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    const trigger = screen.getByText('Open Menu') as HTMLElement
    expect(trigger.className.includes('custom-trigger')).toBe(true)
  })
})
