import styled from 'styled-components';
import Anchor from 'components/Anchor';
import AlertContent from './AlertContent';

const CloseButton = styled(Anchor)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

CloseButton.Negative = styled(Anchor.Negative)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

CloseButton.Positive = styled(Anchor.Positive)`
  color: inherit;
  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin-top: 6px;
    margin-bottom: auto;
  }
`;

export default CloseButton;
