import React from 'react';
import type { ComponentPreviewModule } from '../previewTypes';
import { ComponentPreview } from './ComponentPreview';

export const textareaPreviews: ComponentPreviewModule = {
  componentName: 'Textarea',
  description: 'Migrated component.',
  importPath: 'components/Textarea',
  previews: [
  {
    id: 'textarea-default',
    name: 'Default',
    render: () => <ComponentPreview />
  }]

};

export default textareaPreviews;