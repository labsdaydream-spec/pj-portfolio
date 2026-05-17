import React from 'react';
import type { ComponentPreviewModule } from '../previewTypes';
import { ComponentPreview } from './ComponentPreview';

export const buttonPreviews: ComponentPreviewModule = {
  componentName: 'Button',
  description: 'Migrated component.',
  importPath: 'components/Button',
  previews: [
  {
    id: 'button-default',
    name: 'Default',
    render: () => <ComponentPreview />
  }]

};

export default buttonPreviews;