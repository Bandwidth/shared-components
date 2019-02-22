import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import { HeaderProps, StyledHeader } from './types';
import Skeleton from 'skeletons/Skeleton';

interface H4 extends StyledHeader {
  Skeleton?: React.SFC<{}>;
}

const H4: H4 = styled.h4<HeaderProps>`
  color: ${get('colors.primary.default')};
  font-weight: 900;
  font-family: ${get('fonts.brand')};
  font-size: 1.25em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: ${userSpacing.text};
  padding: 0;
`;

H4.defaultProps = {
  spacing: { bottom: 'lg' },
};

H4.Skeleton = () => <Skeleton width="200px" height="1.25em" />;

export default H4;
