import type { SVGAttributes } from 'react';
import Chat from '@assets/chat.svg';
import Close from '@assets/close.svg';


const defaultAttributes: SVGAttributes<HTMLOrSVGElement> = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit' },
  fill: 'currentColor',
};

export const icons = {
  chat: <Chat {...defaultAttributes} />,
  close: <Close {...defaultAttributes} />,
};

export type IconType = Nullable<keyof typeof icons>;

export const iconKeys = Object.keys(icons) as IconType[];
