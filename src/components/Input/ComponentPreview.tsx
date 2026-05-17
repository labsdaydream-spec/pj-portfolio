import React from "react";
import { Input } from ".";

export const ComponentPreview = () => {
  return (
    <div className="flex flex-col gap-6 p-8 max-w-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">With value</label>
        <Input defaultValue="john@example.com" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled</label>
        <Input placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">File Input</label>
        <Input type="file" />
      </div>
    </div>);

};