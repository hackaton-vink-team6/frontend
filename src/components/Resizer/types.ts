import { HTMLAttributes } from 'react';

export type ResizerProp = {
  position: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  resize?: 'vertical' | 'horizontal';
  maxWidth?: number;
  maxHeight?: number;
} & HTMLAttributes<HTMLDivElement>;

export type Sizes = { width: number; height: number };
export type Coordinate = [number, number];
export type Dimensions = {
  coordinate: Coordinate;
  sizes: Sizes;
};
