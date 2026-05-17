import React from 'react';
import type { ComponentPreviewModule } from '../previewTypes';
import { ComponentPreview } from './ComponentPreview';

export const separatorPreviews: ComponentPreviewModule = {
  componentName: 'Separator',
  description: 'Migrated component.',
  importPath: 'components/Separator',
  previews: [
  {
    id: 'separator-default',
    name: 'Default',
    render: () => <ComponentPreview />
  }]

};

export default separatorPreviews;