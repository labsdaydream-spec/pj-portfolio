# Input

A styled text input component for forms.

## Exports
- `Input` — The input component

## Props
Extends native `<input>` HTML attributes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `string` | `"text"` | Input type |
| placeholder | `string` | - | Placeholder text |
| disabled | `boolean` | `false` | Disables the input |
| className | `string` | - | Additional CSS classes |

## Usage
```tsx
import { Input } from "./Input";

<Input placeholder="Email" type="email" />
```
