import styled from 'styled-components';
import get from 'extensions/themeGet';
import AlertBorder from './AlertBorder';
import { keyframes } from 'styled-components';

export const expandingBottomMargin = keyframes`
  from { margin-bottom: 0; }
  to { margin-bottom: ${get('spacing.medium')}; }
`;

const AlertGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;

  & > ${AlertBorder}, & > ${AlertBorder.Small} {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: ${get('spacing.medium')};
    animation: ${expandingBottomMargin} 0.2s ease;
  }
`;

AlertGroup.Global = styled(AlertGroup)`
  position: fixed;
  top: 0;
  left: ${get('spacing.large')};
  right: ${get('spacing.large')};
  padding-top: ${get('spacing.large')};
  align-content: center;
  pointer-events: none;
  z-index: 5000;

  & > ${AlertBorder}, & > ${AlertBorder.Small} {
    pointer-events: initial;
    box-shadow: ${get('shadows.short')};
    margin-left: auto;
    margin-right: auto;
  }
`;

export default AlertGroup;
