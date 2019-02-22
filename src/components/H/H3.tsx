import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import { HeaderProps } from './types';
import Skeleton from 'skeletons/Skeleton';
import dotNotation from 'extensions/dotNotation';

const LINE_HEIGHT = 1.25;

const H3 = styled.h3<HeaderProps>`
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

export default dotNotation(H3, {
  Skeleton: () => <Skeleton width="200px" height="1.75em" />,
  Primary: dotNotation(
    styled(H3)`
      color: ${get('colors.primary.default')};
    `,
    {
      Skeleton: () => <Skeleton width="200px" height="1.75em" />,
    },
  ),
});
