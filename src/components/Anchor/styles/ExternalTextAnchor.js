import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import { base, positive, negative, dark, inverted } from './sharedStyles';

const color = get('colors.primary.alternate');

const newTabIconStyles = css`
  &::before {
    content: "${icons('openInWindow')}";
    font-family: ${get('fonts.icon')};
    opacity: 0;
    background: ${get('colors.background.default')};
    position: absolute;
    right: 0;
    z-index: 1;
    transition: right 0.3s ease, opacity 0.2s ease;
  }

  &:hover::before {
    right: -1.5em;
    opacity: 1;
    transition: right 0.3s ease, opacity 0.2s ease 0.1s;
  }
`;

const ExternalTextAnchor = styled.a`
  ${base} ${({ newTab }) => (newTab ? newTabIconStyles : '')};
`;

ExternalTextAnchor.Negative = styled(ExternalTextAnchor)`
  ${negative};
`;
ExternalTextAnchor.Danger = ExternalTextAnchor.Negative;

ExternalTextAnchor.Positive = styled(ExternalTextAnchor)`
  ${positive};
`;

ExternalTextAnchor.Dark = styled(ExternalTextAnchor)`
  ${dark};
`;

ExternalTextAnchor.Inverted = styled(ExternalTextAnchor)`
  ${inverted};
`;

export default ExternalTextAnchor;
