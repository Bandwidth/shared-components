import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const ShowMore = styled.div`
  background: ${get('colors.primary.light')};
  color: ${get('colors.primary.alternate')};
  padding: ${get('spacing.medium')} ${get('spacing.large')};
  border-bottom: ${get('thicknesses.normal')} solid ${get('colors.gray.borderLight')};
  border-right: ${get('thicknesses.normal')} solid ${get('colors.gray.borderLight')};
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
