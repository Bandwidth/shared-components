import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import userSpacing from 'extensions/userSpacing';

/**
 * Text divs are vertically aligned based on the cap and
 * base lines of the text. They support the `spacing`
 * property, which allows a user to specify custom spacing
 * around the component.
 *
 * **NOTE:** Many components provide the `spacing` property
 * already. This component is provided as a catch-all
 * solution.
 */
const TextDiv = styled(tag.div).attrs({
  spacing: userSpacing.text,
})`
  margin: ${props => props.spacing};
  font-size: 1em;
`;

TextDiv.propTypes = {
  /**
   * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
   * control the spacing around the heading. Defaults to a large space below the element.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

TextDiv.defaultProps = {
  spacing: { bottom: 'lg' },
  className: null,
  id: null,
};

// @component
export default TextDiv;
