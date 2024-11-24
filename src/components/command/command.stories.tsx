import type { Meta, StoryObj } from "@storybook/react"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "./command"

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Command>

export const Basic: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar" onSelect={() => console.log("Calendar selected")}>
            Calendar
          </CommandItem>
          <CommandItem value="emoji" onSelect={() => console.log("Search Emoji selected")}>
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator" onSelect={() => console.log("Calculator selected")}>
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile" onSelect={() => console.log("Profile selected")}>
            Profile
          </CommandItem>
          <CommandItem value="billing" onSelect={() => console.log("Billing selected")}>
            Billing
          </CommandItem>
          <CommandItem value="settings" onSelect={() => console.log("Settings selected")}>
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem value="new-file" onSelect={() => console.log("New File selected")}>
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem value="save" onSelect={() => console.log("Save selected")}>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem value="copy" onSelect={() => console.log("Copy selected")}>
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          <CommandItem value="open-project" onSelect={() => console.log("Open Project selected")}>
            Open Project
          </CommandItem>
          <CommandItem value="new-document" onSelect={() => console.log("Create New Document selected")}>
            Create New Document
          </CommandItem>
          <CommandItem value="share" onSelect={() => console.log("Share File selected")}>
            Share File
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}
