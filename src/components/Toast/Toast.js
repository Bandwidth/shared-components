import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const Toast = styled.div.withConfig({ displayName: 'Toast' })`
  background: var(--colors-background-default);
  width: 400px;
  padding: var(--spacing-small);
  text-align: center;
  top: 120px;
  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);
  border-radius: 3px;
  position: fixed;
  z-index: 10000000;
  left: 50%;
  transform: translateX(-50%);
  display: block;

  & p {
    margin: 0;
  }
`;

Toast.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Toast.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default Toast;
