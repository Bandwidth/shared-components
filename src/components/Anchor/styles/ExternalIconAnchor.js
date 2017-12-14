import ExternalTextAnchor from './ExternalTextAnchor';
import { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

const iconStyles = css`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;

  &::after {
    opacity: 0;
  }

  &::before {
    font-family: ${get('fonts.icon')};
    content: ${({ icon }) => (!!icon ? `"${icons(icon)}"` : '')};
    font-weight: normal;
    margin-right: ${({ icon, children }) =>
      !!icon && !!children ? '0.5em' : '0'};
  }
`;

const ExternalIconAnchor = ExternalTextAnchor.extend`
  ${iconStyles};
`;

ExternalIconAnchor.Danger = ExternalIconAnchor.Negative = ExternalTextAnchor
  .Danger.extend`
  ${iconStyles}
`;

ExternalIconAnchor.Positive = ExternalTextAnchor.Positive.extend`
  ${iconStyles}
`;

ExternalIconAnchor.Dark = ExternalTextAnchor.Dark.extend`
  ${iconStyles}
`;

ExternalIconAnchor.Inverted = ExternalTextAnchor.Inverted.extend`
  ${iconStyles}
`;

export default ExternalIconAnchor;
