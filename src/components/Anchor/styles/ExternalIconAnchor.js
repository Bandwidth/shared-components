import ExternalTextAnchor from './ExternalTextAnchor';
import { css } from 'styled-components';

const iconStyles = css`
  text-decoration: none;
  display: inline-block;
  &::after {
    opacity: 0;
  }
`;

const ExternalIconAnchor = ExternalTextAnchor.extend`
  ${iconStyles}
`;

ExternalIconAnchor.Danger = ExternalTextAnchor.Danger.extend`
  ${iconStyles}
`;

export default ExternalIconAnchor;
