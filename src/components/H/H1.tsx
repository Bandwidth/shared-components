import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import Skeleton from 'skeletons/Skeleton';
import { HeaderProps, StyledHeader } from './types';

interface H1 extends StyledHeader {
  Skeleton?: React.SFC<{}>;
}

const H1: H1 = styled.h1<HeaderProps>`
  color: ${get('colors.primary.default')};
  font-weight: 100;
  font-family: ${get('fonts.brand')};
  font-size: 2.5em;
  margin: ${userSpacing.text};
  overflow: hidden;
  padding: 0;
`;

H1.defaultProps = {
  spacing: { bottom: 'lg' },
};

H1.Skeleton = () => <Skeleton width="200px" height="2.5em" />;

export default H1;
