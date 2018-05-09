import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const TextArea = styled.textarea`
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
  font-size: 14px;
  font-weight: 400;
  font-family: ${get('fonts.brand')};
  letter-spacing: 0.02em;
  border-color: ${get('colors.border.light')};
  border-width: ${get('thicknesses.wide')};
  border-style: solid;
  line-height: 1.5;
  min-height: 100px;
  box-shadow: none;
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  height: ${props => props.height};
`;

TextArea.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Specifies the height of the element.
   */
  height: PropTypes.string,
};

TextArea.defaultProps = {
  className: null,
  id: null,
  height: '100px',
};

/**
 * @component
 */
export default TextArea;
