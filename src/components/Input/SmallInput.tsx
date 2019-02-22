import React from 'react';
import Input from './Input';
import defaultProps from 'extensions/defaultProps';
import Skeleton from 'skeletons/Skeleton';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(
  defaultProps({
    Styles: (Input.styles.InputStyles as any).Small,
  })(Input),
  { Skeleton: ({ height = '30px' }) => <Skeleton height={height} /> },
);
