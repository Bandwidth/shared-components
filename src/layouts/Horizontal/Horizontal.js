import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const normalize = size => {
  if (!size) {
    return 'large';
  }

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return themeGet('spacing.extraSmall');
    case 'sm':
    case 'small':
      return themeGet('spacing.small');
    case 'lg':
    case 'large':
      return themeGet('spacing.large');
    case 'xl':
    case 'extraLarge':
      return themeGet('spacing.extraLarge');
    case 'md':
    case 'medium':
      return themeGet('spacing.medium');
    default:
      return size;
  }
};

const Horizontal = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-left: ${({ spacing }) => normalize(spacing)};
  }
`;

Horizontal.defaultProps = {
  spacing: 'lg',
  className: "scl-horizontal",
};

Horizontal.propTypes = {
  /**
   * The amount of space to put between items. Use xs, sm, md, lg, or xl.
   */
  spacing: PropTypes.string,
};

//@component
export default Horizontal;
