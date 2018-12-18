import styled from 'styled-components';
import PropTypes from 'prop-types';
import userSpacing from 'extensions/userSpacing';
import SkeletonParagraph from './SkeletonParagraph';

const P = styled.p`
  margin: ${userSpacing.text};
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

P.Skeleton = SkeletonParagraph;

export default P;
