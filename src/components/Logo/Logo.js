import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './logo.png';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Logo', {
    width: '26px',
    height: '30px',
    margin: 'auto',
  })
  .addVariant('small', {
    width: '13px',
    height: '15px',
  })
  .addVariant('large', {
    width: '52px',
    height: '60px',
  })
  .createSelector();

const Img = theme.connect(styled.img`
  ${spreadStyles(select)}
`);

const Logo =  ({ id, className }) => (
  <Img src={logo} id={id} className={className} />
);

Logo.propTypes = {
  /**
   * Adds a class name to the logo image.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the logo image.
   */
  id: PropTypes.string,
};

Logo.defaultProps = {
  className: null,
  id: null,
};

Logo.Small = theme.variant('small')(Logo);
Logo.Large = theme.variant('large')(Logo);

export default Logo;
