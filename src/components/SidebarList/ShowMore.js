import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShowMore = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
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
