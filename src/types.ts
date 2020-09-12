import type { HTMLAttributes, RefObject, RefCallback } from 'react';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  fill?: string;
  width?: number;
  height?: number;
  getRootRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement>;
}
