import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const MethodTag = styled.pre`
  background: ${({ theme, children }) => theme.methodTag.colors[children]};
  color: ${({ theme }) => theme.methodTag.fg};
  font-size: ${({ theme }) => theme.methodTag.fontSize};
  padding: ${({ theme }) => theme.methodTag.padding};
  border-radius: ${({ theme }) => theme.methodTag.borderRadius};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.methodTag.lineHeight};
  margin: 0;
`;

MethodTag.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

MethodTag.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent(`
Use this to annotate URLs with the method which is used to access them (for instance, in API docs). It will automatically choose a color based on the contents of the component, so use \`GET\`, \`POST\` inside, etc.
`)(MethodTag);
