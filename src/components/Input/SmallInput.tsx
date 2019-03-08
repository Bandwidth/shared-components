import React from 'react';
import Input, { InputProps } from './Input';
import defaultProps from 'extensions/defaultProps';
import Skeleton from 'skeletons/Skeleton';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(
  defaultProps(Input, {
    Styles: (Input.styles.InputStyles as any).Small,
  }),
  { Skeleton: ({ height = '30px' }) => <Skeleton height={height} /> },
);
