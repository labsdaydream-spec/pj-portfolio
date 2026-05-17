# Card

A container component for grouping related content with a visual boundary.

## Exports
- `Card` — Root container
- `CardHeader` — Header section
- `CardTitle` — Title text
- `CardDescription` — Description text
- `CardAction` — Action slot (positioned top-right of header)
- `CardContent` — Main content area
- `CardFooter` — Footer with border-top and muted background

## Props

### Card
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `"default" \| "sm"` | `"default"` | Card size variant |

## Usage
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```
