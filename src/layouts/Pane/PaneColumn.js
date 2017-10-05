import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('PaneColumn', ({ colors }) => ({
    borderColor: colors.borderLight,
    borderWidth: '1px',
    borderStyle: 'solid',
  }))
  .createSelector();

const PaneColumnImpl = theme.connect(styled.div.withConfig({ displayName: 'PaneColumn' })`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1 0 auto;
    border-bottom: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
  }

  & > *:last-child {
    border-bottom: none;
  }
`);

export const PaneColumn = (props) => <PaneColumnImpl {...props} />;

PaneColumn.propsTypes = PaneColumnImpl.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneColumn.defaultProps = PaneColumnImpl.defaultProps = {
  id: null,
  className: null,
};

export default PaneColumnImpl;
