import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sharedComponent from '../../sharedComponent';

const LabelImpl = styled.label.withConfig({ displayName: 'Label' })`
  font-size: 1em;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.brand};
  padding-bottom: 0.4em;
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: block;
  line-height: 1.5em;

  ${({ required, theme }) =>
    required
      ? css`
        &::after {
          content: '*';
          color: #e8562e;
          padding-left: 0.3em;
        }
      `
      : ''}
`;

export const Label = ({children, ...rest}) => (
  <LabelImpl {...rest}>{children}</LabelImpl>
)

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

export default sharedComponent({ Styled: LabelImpl })(Label);
