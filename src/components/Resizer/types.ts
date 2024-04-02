import { HTMLAttributes } from 'react';

export type ResizerProp = {
  position: 'left' | 'center' | 'right';
  resize?: 'vertical' | 'horizontal';
  maxWidth?: number;
  maxHeight?: number;
} & HTMLAttributes<HTMLDivElement>;
