import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import userSpacing from 'extensions/userSpacing';
import BlobParagraph from 'skeletons/BlobParagraph';

const P = styled(tag.p).attrs({
  spacing: userSpacing.text,
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

P.Skeleton = BlobParagraph;

export default P;
