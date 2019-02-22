import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import dotNotation from 'extensions/dotNotation';
import Logo from './Logo';

const Primary = styled(Logo)`
  fill: ${themeGet('colors.primary.default')};
`;

export default dotNotation(Primary, {
  Small: styled(Logo)`
    fill: ${themeGet('colors.primary.default')};
    height: ${themeGet('spacing.medium')};
  `,
  Large: styled(Logo)`
    fill: ${themeGet('colors.primary.default')};
    height: ${themeGet('spacing.extraLarge')};
  `,
});
