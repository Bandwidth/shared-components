import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import { HeaderProps, StyledHeader } from './types';
import Skeleton from 'skeletons/Skeleton';

interface H3 extends StyledHeader {
  Primary?: H3;
  Skeleton?: React.SFC<{}>;
}

const LINE_HEIGHT = 1.25;

const H3: H3 = styled.h3<HeaderProps>`
  color: ${get('colors.text.default')};
  font-weight: 300;
  font-family: ${get('fonts.brand')};
  font-size: 1.75em;
  line-height: ${LINE_HEIGHT};
  letter-spacing: 0;
  margin: ${!!userSpacing.withLineHeight &&
    userSpacing.withLineHeight(LINE_HEIGHT)};
  padding: 0;
`;

H3.defaultProps = {
  spacing: { bottom: 'lg' },
};

H3.Primary = styled(H3)`
  color: ${get('colors.primary.default')};
`;

H3.Skeleton = () => <Skeleton width="200px" height="1.75em" />;
H3.Primary.Skeleton = () => <Skeleton width="200px" height="1.75em" />;

export default H3;
