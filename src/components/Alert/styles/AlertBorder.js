import styled from 'styled-components';
import get from 'extensions/themeGet';
import AlertIcon from './AlertIcon';
import AlertText from './AlertText';

const AlertBorder = styled.div`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  font-weight: 500;
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  width: auto;
  font-size: 1em;
  line-height: 1em;
  position: relative;
  display: flex;
  flex-direction: row;

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

  & > ${AlertIcon} {
    margin: 0 1em auto 0;
    flex: 0 0 auto;
  }

  & > ${AlertText} {
    margin: auto 0 0 0;
  }
`;

AlertBorder.Small = AlertBorder.extend`
  padding: 0.5em 1em;
  font-size: 0.8em;
`;

export default AlertBorder;
