import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import { HeaderProps, StyledHeader } from './types';
import Skeleton from 'skeletons/Skeleton';

interface H2 extends StyledHeader {
  Skeleton?: React.SFC<{}>;
}

const H2: H2 = styled.h2<HeaderProps>`
  color: ${get('colors.text.default')};
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  font-size: 2em;
  margin: ${userSpacing.text};
  padding: 0;
`;

H2.defaultProps = {
  spacing: { bottom: 'lg' },
};

H2.Skeleton = () => <Skeleton width="200px" height="2em" />;

export default H2;
