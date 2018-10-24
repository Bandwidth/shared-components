import styled from 'styled-components';
import Link from 'components/Link';
import AlertContent from './AlertContent';

const CloseButton = styled(Link)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

CloseButton.Negative = styled(Link.Negative)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

CloseButton.Positive = styled(Link.Positive)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

export default CloseButton;
