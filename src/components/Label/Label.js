import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const Label = styled.label.withConfig({ displayName: 'Label' })`
  font-size: 1em;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-family: ${get('fonts.brand')};
  color: ${get('colors.text.default')};
  background: transparent;
  line-height: 1.5;
  display: block;

  ${({ disabled }) => disabled ? 'opacity: 0.5;' : ''}

  &:disabled {
    opacity: 0.5;
  }

  ${({ required }) =>
    required ?
      css`
        &::after {
          content: '*';
          color: #e8562e;
          padding-left: 0.3em;
        }
      ` :
      ''
  }
`;

Label.propTypes = {
  /**
   * Styles the label to indicate that the associated field is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Label.defaultProps = {
  disabled: false,
  className: null,
  id: null,
};

/**
 * @component
 */
export default Label;
