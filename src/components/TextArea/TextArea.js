import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const TextArea = styled.textarea`
  resize: ${props => props.resize};
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 14px;
  font-family: ${get('fonts.brand')};
  transition: all 0.2s ease;
  padding: calc(${get('spacing.medium')} - 1px);
  border-width: ${get('thicknesses.wide')};
  border-style: solid;

  color: ${get('colors.text.default')};
  background: ${get('colors.background.default')};
  opacity: 1;
  border-color: ${get('colors.border.light')};

  outline: none;
  width: 100%;

  &:required {
    box-shadow: none;
  }

  &:focus {
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
    border-color: ${get('colors.border.medium')};
  }

  &:disabled {
    background: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.medium')};
    opacity: 0.5;
    color: ${get('colors.text.disabled')};
  }

  &::placeholder {
    opacity: 0.5;
  }

  ${props =>
    props.visited
      ? css`
          &:invalid {
            box-shadow: inset 0 -5px 0 ${get('colors.negative.light')(props)};
            border-color: ${get('colors.negative.border')(props)};
          }
        `
      : ''} ${props =>
    props.invalid || props.error
      ? `
    box-shadow: inset 0 -5px ${get('colors.negative.light')(props)};
    border-color: ${get('colors.negative.border')(props)};
    `
      : ''};
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
  /**
   * Controls if the textarea can be resized by the user.
   */
  resize: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
};

TextArea.defaultProps = {
  className: null,
  id: null,
  height: '100px',
  resize: 'vertical',
};

/**
 * @component
 */
export default TextArea;
