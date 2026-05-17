import React from 'react';
import type { ComponentPreviewModule } from '../previewTypes';
import { ComponentPreview } from './ComponentPreview';

export const inputPreviews: ComponentPreviewModule = {
  componentName: 'Input',
  description: 'Migrated component.',
  importPath: 'components/Input',
  previews: [
  {
    id: 'input-default',
    name: 'Default',
    render: () => <ComponentPreview />
  }]

};

export default inputPreviews;