import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const processMethod = method => {
  const normalized = method.toLowerCase();
  if (normalized === 'delete') {
    return 'del';
  }
  return normalized;
};

const methodColors = {
  post: get('colors.primary.default'),
  get: get('colors.positive.default'),
  put: get('colors.accents[0].default'),
  del: get('colors.negative.default'),
};

const MethodTag = styled.pre`
  color: ${get('colors.text.inverted')};
  font-size: 1em;
  line-height: 1em;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0;
  width: auto;
  display: inline-block;

  background: ${props => {
    const method = processMethod(props.children);
    return methodColors[method](props);
  }};
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

/**
 * @component
 */
export default MethodTag;
