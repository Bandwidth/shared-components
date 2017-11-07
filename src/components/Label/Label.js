import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Label', ({ colors, fonts }) => ({
    fontSize: '1em',
    letterSpacing: '0.02em',
    fontWeight: 600,
    fontFamily: fonts.brand,
    color: colors.text.default,
    background: 'transparent',
    disabledOpacity: '0.5',
    lineHeight: '1.5em',
    requiredMarkColor: '#e8562e',
  }))
  .createSelector();

const LabelImpl = theme.connect(styled.label.withConfig({ displayName: 'Label' })`
  ${spreadStyles(select)}
  display: block;

  &:disabled {
    opacity: ${select('disabledOpacity')};
  }

  ${({ required, theme }) =>
    required ?
      css`
        &::after {
          content: '*';
          color: ${select('requiredMarkColor')};
          padding-left: 0.3em;
        }
      ` :
      ''
  }
`);

const Label = ({children, ...rest}) => (
  <LabelImpl {...rest}>{children}</LabelImpl>
)

Label.propTypes = LabelImpl.propTypes = {
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

Label.defaultProps = LabelImpl.defaultProps = {
  disabled: false,
  className: null,
  id: null,
};

LabelImpl.Styled = LabelImpl.WrappedComponent;

export default LabelImpl;
