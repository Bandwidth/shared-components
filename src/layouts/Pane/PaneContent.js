import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PaneContentImpl = styled.div`
  padding: ${({ theme }) => theme.pane.contentPadding};
`;

export const PaneContent = ({ children, ...rest }) => (
  <PaneContentImpl {...rest}>{children}</PaneContentImpl>
);

PaneContent.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneContent.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent()(PaneContent);
