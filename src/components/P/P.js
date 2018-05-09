import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import userTextSpacing from 'extensions/userTextSpacing';

const P = styled(tag.p).attrs({
  spacing: userTextSpacing,
})`
  margin: ${props => props.spacing};
  font-size: 1em;
`;

P.propTypes = {
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

P.defaultProps = {
  spacing: { bottom: 'lg' },
  className: null,
  id: null,
};

export default P;
