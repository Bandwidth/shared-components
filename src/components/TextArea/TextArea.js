import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const TextAreaImpl = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.default};
  padding: ${({ theme }) => theme.spacing.medium};
  letter-spacing: 0.02em;
  box-shadow: none;
  transition: all 0.2s ease;
  line-height: 1.5em;
  outline: none;
  width: 100%;
  min-height: 100px;
`;

export const TextArea = ({ children, ...rest }) => (
  <TextAreaImpl {...rest}>{children}</TextAreaImpl>
);

TextArea.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

TextArea.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent()(TextArea);
