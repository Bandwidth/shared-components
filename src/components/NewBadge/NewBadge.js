import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('NewBadge', ({ colors }) => ({
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: '0.85em',
    margin: '0 0 0 1em',
    textTransform: 'uppercase',
  }))
  .createSelector();

const NewBadgeImpl = theme.connect(styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    display: inline-block;
    ${spreadStyles(select)}
  }
`);

export const NewBadge = (props) => <NewBadge {...props} />;

NewBadgeImpl.propTypes = NewBadge.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NewBadgeImpl.defaultProps = {
  className: null,
  id: null,
};

export default NewBadgeImpl;
