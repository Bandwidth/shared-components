import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PaneLayoutImpl = styled.div.withConfig({ displayName: 'PaneLayout' })`
  padding: 30px;
`;

const PaneLayout = ({ children, ...rest }) => (
  <PaneLayoutImpl {...rest}>{children}</PaneLayoutImpl>
);

PaneLayout.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneLayout.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent()(PaneLayout);
