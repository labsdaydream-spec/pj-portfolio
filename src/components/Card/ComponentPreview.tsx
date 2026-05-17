import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from ".";

export const ComponentPreview = () => {
  return (
    <div className="flex flex-col gap-6 p-8 max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description with supporting text.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. This can contain any elements.</p>
        </CardContent>
        <CardFooter>
          <button className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground">Save Changes</button>
        </CardFooter>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>A compact card variant.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Compact content with tighter spacing.</p>
        </CardContent>
      </Card>
    </div>);

};