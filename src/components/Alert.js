import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from './helpers/icons';

const Alert = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-width: 1px;
  border-style: solid;
  font-weight: 500;
  width: auto;
  line-height: 1em;
  
  a {
    color: inherit;
  }

  a::after {
    background: ${({ theme, type }) => {
      switch (type) {
        case 'success':
          return theme.colors.successText;
        case 'error':
          return theme.colors.errorText;
        default:
          return theme.colors.infoText;
      }
    }};
  }

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.colors.successBackgroundLight;
      case 'error':
        return theme.colors.errorBackgroundLight;
      default:
        return theme.colors.infoBackgroundLight;
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.colors.successText;
      case 'error':
        return theme.colors.errorText;
      default:
        return theme.colors.infoText;
    }
  }};

  &::before {
    content: ${({ type, textOnly }) => {
      if (textOnly) {
        return '';
      }

      switch (type) {
        case 'success':
          return `"${icons('checkmark')}"`;
        case 'error':
          return '"!"';
        default:
          return '"i"';
      }
    }};

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, type }) => {
      switch (type) {
        case 'success':
          return theme.colors.successBorder;
        case 'error':
          return theme.colors.errorBorder;
        default:
          return theme.colors.infoBorder;
      }
    }};

    background: ${({ theme }) => theme.colors.white};
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    line-height: 1.2em;
    font-family: ${({ theme }) => `Bandwidth, ${theme.fonts.brand}`};
    text-align: center;
    border-radius: 100%;
    font-size: 0.9em;

    margin-right: 1em;
  }
`;

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error']),
  textOnly: PropTypes.bool,
};

Alert.defaultProps = {
  type: 'info',
  textOnly: false,
};

Alert.usage = `
# Alert

Alerts control their own color based on \`type\`.

* \`type\`: \`['info', 'success', 'error']\`
* \`textOnly\`: \`true|false\`
`;

export default Alert;
