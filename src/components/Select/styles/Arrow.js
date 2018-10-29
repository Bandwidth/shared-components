import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components';

const Arrow = styled(Icon)`
  transform: ${props => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.2s ease all;
  cursor: pointer;
`;

export default props => <Arrow {...props} name="expandArrow" />;
