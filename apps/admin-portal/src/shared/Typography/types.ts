import { PropsWithChildren } from 'react';

type Typography = 'body1' | 'body2' | 'h3' | 'caption2';

export type TypographyProps = {
  type?: Typography;
  className?: string;
} & PropsWithChildren;
