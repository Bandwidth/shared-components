import styled, { keyframes } from 'styled-components';
import get from 'extensions/themeGet';
import tag from 'clean-tag';
import userSpacing from 'extensions/userSpacing';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AlertBorder = styled(tag.div).attrs({
  spacing: userSpacing,
})`
  font-weight: 200;
  border-width: var(--thicknesses-normal);
  border-style: solid;
  width: auto;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 0.02em;
  margin: ${props => props.spacing};
  animation: ${fadeIn} 0.2s ease;
  transition: opacity 0.2s ease;

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return 'var(--colors-positive-light)';
      case 'error':
        return 'var(--colors-negative-light)';
      default:
        return 'var(--colors-primary-light)';
    }
  }};

  border-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return 'var(--colors-positive-border)';
      case 'error':
        return 'var(--colors-negative-border)';
      default:
        return 'var(--colors-primary-border)';
    }
  }};

  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return 'var(--colors-positive-dark)';
      case 'error':
        return 'var(--colors-negative-dark)';
      default:
        return 'var(--colors-primary-dark)';
    }
  }};

  opacity: ${props => (props.closing ? '0' : '1')};
`;

AlertBorder.Small = styled(AlertBorder)`
  font-size: 0.8em;
  font-weight: 300;
`;

export default AlertBorder;
