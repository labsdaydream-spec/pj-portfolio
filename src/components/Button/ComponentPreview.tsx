import React from "react";
import { Button } from ".";
import { Mail, ArrowRight, Loader2, Plus, Trash2 } from "lucide-react";

export const ComponentPreview = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Variants</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">With Icons</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button><Mail /> Login with Email</Button>
          <Button variant="outline">Next <ArrowRight /></Button>
          <Button variant="secondary"><Plus /> Create New</Button>
          <Button variant="destructive"><Trash2 /> Delete</Button>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Icon Buttons</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="icon-xs" variant="outline"><Plus /></Button>
          <Button size="icon-sm" variant="outline"><Plus /></Button>
          <Button size="icon" variant="outline"><Plus /></Button>
          <Button size="icon-lg" variant="outline"><Plus /></Button>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">States</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button disabled>Disabled</Button>
          <Button disabled variant="outline">Disabled Outline</Button>
          <Button><Loader2 className="animate-spin" /> Loading</Button>
        </div>
      </div>
    </div>);

};