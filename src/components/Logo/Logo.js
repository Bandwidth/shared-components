import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import LogoImage from './styles/LogoImage';
import logo from './logo.png';

const Logo = ({ id, className, Image }) => (
  <Image src={logo} id={id} className={className} />
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
  /**
   * An img element component to render the image itself
   */
  Image: PropTypes.func,
};

Logo.defaultProps = {
  className: null,
  id: null,
  Image: LogoImage,
};

Logo.Small = withProps({
  Image: LogoImage.Small,
})(Logo);
Logo.Large = withProps({
  Image: LogoImage.Large,
})(Logo);

export default Logo;
