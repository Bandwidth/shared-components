import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';

const AlertContainer = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-width: 1px;
  border-style: solid;
  font-weight: 500;
  width: auto;
  line-height: 1em;
  position: relative;

  a {
    color: inherit;
  }

  p {
    margin: 0;
    margin-left: 3em;
    padding: .3em 0em;
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
    position: absolute;
    margin-right: 1em;
  }
`;

const Alert = (props) => (
  <AlertContainer {...props}>
    <p>{props.children}</p>
  </AlertContainer>
)

Alert.propTypes = {
  /**
   * An alert type; one of [info, success, error].
   */
  type: PropTypes.oneOf(['info', 'success', 'error']),
  /**
   * Whether to render only text (true) or an icon alongside text (false).
   */
  textOnly: PropTypes.bool,
  /**
   * Additional class name to pass to the alert.
   */
  className: PropTypes.string,
  /**
   * Additional id to pass to the alert.
   */
  id: PropTypes.string,
};

Alert.defaultProps = {
  type: 'info',
  textOnly: false,
  className: null,
  id: null,
};


export default Alert;
