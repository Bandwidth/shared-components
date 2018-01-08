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
  white-space: wrap;

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return get('colors.positive.light');
      case 'error':
        return get('colors.negative.light');
      default:
        return get('colors.primary.light');
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return get('colors.positive.default');
      case 'error':
        return get('colors.negative.default');
      default:
        return get('colors.primary.default');
    }
  }};
`;

AlertBorder.Small = AlertBorder.extend`
  padding: 5px;
  font-size: 0.8em;
  min-height: 30px;
`;

export default AlertBorder;
