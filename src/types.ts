import type { HTMLAttributes, RefObject } from 'react';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  fill?: string;
  width?: number;
  height?: number;
  getRootRef?: RefObject<HTMLDivElement>;
}
