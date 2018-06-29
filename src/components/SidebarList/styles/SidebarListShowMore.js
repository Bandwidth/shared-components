import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const ShowMore = styled.div`
  background: var(--colors-primary-light);
  color: var(--colors-primary-alternate);
  padding: var(--spacing-medium) var(--spacing-large);
  border-bottom: var(--thicknesses-normal) solid var(--colors-gray-border-light);
  border-right: var(--thicknesses-normal) solid var(--colors-gray-border-light);
  cursor: pointer;
`;

ShowMore.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

ShowMore.defaultProps = {
  className: null,
  id: null,
};

export default ShowMore;
