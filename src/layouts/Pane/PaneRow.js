import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('PaneRow', ({ colors }) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderLight,
  }))
  .createSelector();

const PaneRowImpl = styled.div.withConfig({ displayName: 'PaneRow' })`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1;
    border-right: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
    border-left: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
    margin-left: -${select('borderWidth')};
  }

  & > *:first-child {
    margin-left: 0;
    border-left: none;
  }

  & > *:last-child {
    border-right: none;
  }
`;

export const PaneRow = (props) => <PaneRowImpl {...props} />;

PaneRow.propTypes = PaneRowImpl.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneRow.defaultProps = PaneRowImpl.defaultProps = {
  id: null,
  className: null,
};

export default PaneRowImpl;
