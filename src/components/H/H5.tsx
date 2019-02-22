import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import { HeaderProps } from './types';
import Skeleton from 'skeletons/Skeleton';
import dotNotation from 'extensions/dotNotation';

const H5 = styled.h5<HeaderProps>`
  color: ${get('colors.text.default')};
  font-weight: 800;
  font-family: ${get('fonts.brand')};
  font-size: 1.15em;
  margin: ${userSpacing.text};
  padding: 0;
`;

H5.defaultProps = {
  spacing: { bottom: 'lg' },
};

export default dotNotation(H5, {
  Skeleton: () => <Skeleton width="200px" height="1.15em" />,
});
