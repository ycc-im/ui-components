# @ycc.im/ui-components

A React component library providing reusable UI components.

## Features

- Modern React components
- TypeScript support
- Storybook documentation
- Fully tested components
- Tailwind CSS styling

## Installation

```bash
npm install @ycc.im/ui-components
# or
yarn add @ycc.im/ui-components
# or
pnpm add @ycc.im/ui-components
```

## Usage

```jsx
import { Button } from '@ycc.im/ui-components';
import '@ycc.im/ui-components/style.css';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}
```

## Available Components

- Badge
- Button
- Calendar
- Carousel
- Combobox
- Command
- DataTable
- Dialog
- DropdownMenu
- Input
- Popover
- Sheet
- SimpleDialog
- Table
- Toast

## Development

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Start Storybook with `pnpm storybook`
4. Run tests with `pnpm test`

## License

MIT
