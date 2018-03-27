import ExternalTextAnchor from './ExternalTextAnchor';
import { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { base, positive, negative, dark, inverted } from './sharedStyles';

const iconStyles = css`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;

  &::after {
    opacity: ${({ appearFocused }) => (appearFocused ? 0.125 : 0)};
  }

  &::before {
    font-family: ${get('fonts.icon')};
    content: ${({ icon }) => (!!icon ? `"${icons(icon)}"` : '')};
    font-weight: normal;
    margin-right: ${({ icon, children }) =>
      !!icon && !!children ? '0.5em' : '0'};
  }

  & > ${Icon} {
    font-weight: normal;
  }
`;

const ExternalIconAnchor = styled.a`
  ${base} ${iconStyles};
`;

ExternalIconAnchor.Negative = styled.a`
  ${base} ${iconStyles};
  ${negative};
`;
ExternalIconAnchor.Danger = ExternalIconAnchor.Negative;

ExternalIconAnchor.Positive = styled.a`
  ${base} ${iconStyles};
  ${positive};
`;

ExternalIconAnchor.Dark = styled.a`
  ${base} ${iconStyles};
  ${dark};
`;

ExternalIconAnchor.Inverted = styled.a`
  ${base} ${iconStyles};
  ${inverted};
`;

export default ExternalIconAnchor;
