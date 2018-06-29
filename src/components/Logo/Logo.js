import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'recompose';
import LogoImage from './styles/LogoImage';
import LogoSvg from './logo.svg';
import styled from 'styled-components';

const Logo = ({ width, height, color, style, ...rest }) => (
  <LogoSvg style={{ width, height, fill: color, ...style }} {...rest} />
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
   * Sets the color of the logo.
   */
  color: PropTypes.string,
  /**
   * Manually control the width of the logo. If only width is set, height
   * will be based on the aspect ratio.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Manually control the width of the logo. If only height is set, width
   * will be based on the aspect ratio.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  className: null,
  id: null,
  color: 'var(--colors-text-inverted)',
  height: 'var(--spacing-large)',
};

Logo.Small = defaultProps({
  height: 'var(--spacing-medium)',
})(Logo);
Logo.Large = defaultProps({
  height: 'var(--spacing-extra-large)',
})(Logo);

Logo.Primary = defaultProps({
  color: 'var(--colors-primary-default)',
})(Logo);
Logo.Primary.Small = defaultProps({
  color: 'var(--colors-primary-default)',
  height: 'var(--spacing-medium)',
})(Logo);
Logo.Primary.Large = defaultProps({
  color: 'var(--colors-primary-default)',
  height: 'var(--spacing-extra-large)',
})(Logo);

export default Logo;
