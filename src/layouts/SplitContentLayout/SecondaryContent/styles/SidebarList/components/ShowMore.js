import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'extensions';

const ShowMore = styled.div`
  background: ${themeGet('colors.primary.light')};
  color: ${themeGet('colors.primary.alternate')};
  padding: ${themeGet('spacing.medium')} ${themeGet('spacing.large')};
  border-bottom: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.borderLight')};
  border-right: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.borderLight')};
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
