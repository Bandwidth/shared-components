import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('HelpText', ({ colors, fonts }) => ({
    color: colors.grayLightText,
    errorColor: colors.errorText,
    fontWeight: 300,
    fontFamily: fonts.brand,
    fontStyle: 'italic',
  }))
  .createSelector();

const HelpTextImpl = theme.connect(styled.div.withConfig({ displayName: 'HelpText' })`
  color: ${(props) => props.error ? select('errorColor') : select('color')};
  font-style: ${select('fontStyle')};
  font-weight: ${select('fontWeight')};
  font-family: ${select('fontFamily')};
`);

const HelpText = ({children, ...rest}) => (
  <HelpTextImpl {...rest}>{children}</HelpTextImpl>
)

HelpText.propTypes = HelpTextImpl.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Whether this help text is in an error state
   */
  error: PropTypes.bool,
};

HelpText.defaultProps = HelpTextImpl.defaultProps = {
  className: null,
  id: null,
};

HelpTextImpl.Styled = HelpTextImpl.WrappedComponent;

export default HelpTextImpl;
