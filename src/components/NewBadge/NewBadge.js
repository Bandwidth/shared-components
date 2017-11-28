import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const NewBadge = styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    display: inline-block;
    color: ${get('colors.primary.default')};
    font-weight: bold;
    font-size: 0.85em;
    margin: 0 0 0 1em;
    text-transform: uppercase;
  }
`;

NewBadge.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NewBadge.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default NewBadge;
