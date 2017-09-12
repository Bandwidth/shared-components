import React from 'react';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const darkBG = 'rgba(0, 0, 0, 0.05)';
const lightBG = 'transparent';

const TBodyImpl = styled.tbody`
  & > tr {
    &:nth-child(odd) {
      background: ${({ zebraStripe, startIndex }) =>
        zebraStripe && startIndex % 2 === 0 ? darkBG : lightBG};
    }

    &:nth-child(even) {
      background: ${({ zebraStripe, startIndex }) =>
        zebraStripe ? (startIndex % 2 === 0 ? lightBG : darkBG) : lightBG};
    }
  }
`;

export const TBody = ({ children, ...rest }) => (
  <TBodyImpl {...rest}>{children}</TBodyImpl>
);

TBody.defaultProps = {
  zebraStripe: true,
  startIndex: 0,
};

export default sharedComponent()(TBody);
