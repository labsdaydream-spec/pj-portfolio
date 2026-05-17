# Button

A versatile button component with multiple variants and sizes.

## Exports
- `Button` — The main button component
- `buttonVariants` — CVA variant function for applying button styles to other elements
- `ButtonProps` — TypeScript interface for Button props

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default" \| "secondary" \| "outline" \| "ghost" \| "destructive" \| "link"` | `"default"` | Visual style variant |
| size | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` | Button size |
| disabled | `boolean` | `false` | Disables the button |
| className | `string` | - | Additional CSS classes |

## Usage
```tsx
import { Button } from "./Button";

<Button variant="default">Click me</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button size="icon"><PlusIcon /></Button>
```
