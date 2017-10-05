import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('ShowMore', ({ colors, spacing }) => ({
    background: colors.primaryLight,
    color: colors.primaryDark,
    padding: `${spacing.medium} ${spacing.large}`,
    borderColor: colors.borderLight,
    borderWidth: '1px',
  }))
  .createSelector();

const ShowMore = styled.div`
  background: ${select('background')};
  color: ${select('color')};
  padding: ${select('padding')};
  border-bottom: ${select('borderWidth')} solid ${select('borderColor')};
  border-right: ${select('borderWidth')} solid ${select('borderColor')};
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
