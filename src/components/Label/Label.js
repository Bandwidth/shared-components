import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sharedComponent from '../../sharedComponent';

const LabelImpl = styled.label.withConfig({ displayName: 'Label' })`
  font-size: ${({ theme }) => theme.label.fontSize};
  letter-spacing: ${({ theme }) => theme.label.letterSpacing};
  font-weight: ${({ theme }) => theme.label.fontWeight};
  font-family: ${({ theme }) => theme.label.fontFamily};
  padding-bottom: 0.4em;
  color: ${({ theme }) => theme.label.fg};
  background: ${({ theme }) => theme.label.bg};
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
  display: block;
  line-height: 1.5em;

  ${({ required, theme }) =>
    required ?
      css`
        &::after {
          content: '*';
          color: ${theme.label.requiredMarkFG};
          padding-left: 0.3em;
        }
      ` :
      ''
  }
`;

const Label = ({children, ...rest}) => (
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
