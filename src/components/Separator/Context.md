# Separator

A visual divider between content sections.

## Exports
- `Separator` — The separator component

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the separator |
| decorative | `boolean` | `true` | Whether the separator is decorative only |
| className | `string` | - | Additional CSS classes |

## Usage
```tsx
import { Separator } from "./Separator";

<Separator />
<Separator orientation="vertical" />
```
