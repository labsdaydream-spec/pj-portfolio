import React from "react";
import { Textarea } from ".";

export const ComponentPreview = () => {
  return (
    <div className="flex flex-col gap-6 p-8 max-w-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Textarea placeholder="Type your message here." />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">With value</label>
        <Textarea defaultValue="This is some example text content in the textarea." />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled</label>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>
    </div>);

};