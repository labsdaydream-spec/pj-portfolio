import React from "react";
import { Separator } from ".";

export const ComponentPreview = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Horizontal</p>
        <div className="space-y-3">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Vertical</p>
        <div className="flex h-5 items-center gap-3 text-sm">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </div>
    </div>);

};