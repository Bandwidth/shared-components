import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableBody = styled.tbody`
  & > tr {
    &:nth-child(odd) {
      background: ${props =>
        props.zebraStripe && props.startIndex % 2 === 1
          ? 'var(--colors-shadow-extra-light)'
          : 'transparent'};
    }

    &:nth-child(even) {
      background: ${props =>
        props.zebraStripe
          ? props.startIndex % 2 === 1
            ? 'transparent'
            : 'var(--colors-shadow-extra-light)'
          : 'transparent'};
    }
  }
`;

TableBody.defaultProps = {
  zebraStripe: true,
  startIndex: 0,
};

export default TableBody;
