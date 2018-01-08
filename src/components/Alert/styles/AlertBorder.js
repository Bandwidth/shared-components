import styled from 'styled-components';
import get from 'extensions/themeGet';

const AlertBorder = styled.div`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  font-weight: 200;
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  width: auto;
  font-size: 14px;
  line-height: 1.5em;
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 53px;
  letter-spacing: 0.02em;

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return '#e0fff7';
      case 'error':
        return '#ffede8';
      default:
        return '#e0f7fd';
    }
  }};

  border-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return '#00fbb9';
      case 'error':
        return '#ffb39e';
      default:
        return '#00bef0';
    }
  }};

  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return '#005c44';
      case 'error':
        return '#a53f0c';
      default:
        return get('colors.primary.dark');
    }
  }};
`;

AlertBorder.Small = AlertBorder.extend`
  padding: 5px;
  font-size: 0.8em;
  min-height: 30px;
  font-weight: 300;
`;

export default AlertBorder;
