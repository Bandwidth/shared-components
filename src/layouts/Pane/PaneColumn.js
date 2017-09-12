import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PaneColumnImpl = styled.div.withConfig({ displayName: 'PaneColumn' })`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1 0 auto;
    border-bottom: 1px solid #e1e1e1;
  }

  & > *:last-child {
    border-bottom: none;
  }
`;

export const PaneColumn = ({ children, ...rest }) => (
  <PaneColumnImpl {...rest}>{children}</PaneColumnImpl>
);

PaneColumn.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneColumn.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent()(PaneColumn);
