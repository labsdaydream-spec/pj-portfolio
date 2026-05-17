import React from 'react';
import type { ComponentPreviewModule } from '../previewTypes';
import { ComponentPreview } from './ComponentPreview';

export const cardPreviews: ComponentPreviewModule = {
  componentName: 'Card',
  description: 'Migrated component.',
  importPath: 'components/Card',
  previews: [
  {
    id: 'card-default',
    name: 'Default',
    render: () => <ComponentPreview />
  }]

};

export default cardPreviews;