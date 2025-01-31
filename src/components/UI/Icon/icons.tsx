import type { SVGAttributes } from 'react';
import Chat from '@/assets/chat.svg?react';
import Close from '@/assets/close.svg?react';
import Search from '@/assets/search.svg?react';
import Whatsapp from '@/assets/whatsapp.svg?react';
import Telegram from '@/assets/telegram.svg?react';
import Enter from '@/assets/enter.svg?react';

const defaultAttributes: SVGAttributes<HTMLOrSVGElement> = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit' },
  fill: 'currentColor',
};

export const icons = {
  chat: <Chat {...defaultAttributes} />,
  close: <Close {...defaultAttributes} />,
  search: <Search {...defaultAttributes} />,
  whatsapp: <Whatsapp {...defaultAttributes} />,
  telegram: <Telegram {...defaultAttributes} />,
  enter: <Enter {...defaultAttributes} />,
};

export type IconType = Nullable<keyof typeof icons>;

export const iconKeys = Object.keys(icons) as IconType[];
