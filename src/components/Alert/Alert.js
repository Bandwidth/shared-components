import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Alert', ({ colors, spacing }) => ({
    padding: `${spacing.small} ${spacing.medium}`,
    fontWeight: 500,
    borderWidth: '1px',
    borderStyle: 'solid',
    width: 'auto',
    lineHeight: '1em',
    position: 'relative',
    display: 'inline-block',
    iconBackground: colors.background.default,
    colors: {
      success: colors.positive.default,
      info: colors.primary.dark,
      error: colors.negative.default,
    },
    backgrounds: {
      success: colors.positive.light,
      info: colors.primary.light,
      error: colors.negative.light,
    },
    borderColors: {
      success: colors.positive.border,
      info: colors.primary.border,
      error: colors.negative.border,
    },
  }))
  .createSelector();

const AlertContainer = theme.connect(styled.div`
  ${spreadStyles(select)}

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
          return select('colors.success');
        case 'error':
          return select('colors.error');
        default:
          return select('colors.info');
      }
    }};
  }

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return select('backgrounds.success');
      case 'error':
        return select('backgrounds.error');
      default:
        return select('backgrounds.info');
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return select('colors.success');
      case 'error':
        return select('colors.error');
      default:
        return select('colors.info');
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
          return select('borders.success');
        case 'error':
          return select('borders.error');
        default:
          return select('borders.info');
      }
    }};

    background: ${select('iconBackground')};
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    line-height: 1.2em;
    font-family: "Bandwidth";
    text-align: center;
    border-radius: 100%;
    font-size: 0.9em;
    position: absolute;
    margin-right: 1em;
  }
`);

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
