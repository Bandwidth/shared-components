import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './logo.png';

const Img = styled.img`
  width: 26px;
  height: 30px;
  margin: auto;
`;

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

export default Logo;
