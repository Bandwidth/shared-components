import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import LogoImage from './styles/LogoImage';
import logoWhite from './logo.png';
import logoBlue from './logoBlue.png';

const variantLookup = {
  white: logoWhite,
  blue: logoBlue,
};

const Logo = ({ variant, id, className, Image }) => (
  <Image src={variantLookup[variant]} id={id} className={className} />
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
   * Logo style variant
   */
  variant: PropTypes.oneOf(['blue', 'white']),
  /**
   * An img element component to render the image itself
   */
  Image: PropTypes.func,
};

Logo.defaultProps = {
  className: null,
  id: null,
  Image: LogoImage,
  variant: 'white',
};

Logo.Small = withProps({
  Image: LogoImage.Small,
})(Logo);
Logo.Large = withProps({
  Image: LogoImage.Large,
})(Logo);

export default Logo;
