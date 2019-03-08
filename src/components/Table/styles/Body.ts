import styled from 'styled-components';
import get from 'extensions/themeGet';

export interface TableBodyProps {
  zebraStripe?: boolean;
  startIndex?: number;
}

const TableBody = styled.tbody<TableBodyProps>`
  & > tr {
    &:nth-child(odd) {
      background: ${props =>
        props.zebraStripe && (props.startIndex || 0) % 2 === 1
          ? get('colors.shadow.extraLight')(props)
          : 'transparent'};
    }

    &:nth-child(even) {
      background: ${props =>
        props.zebraStripe
          ? (props.startIndex || 0) % 2 === 1
            ? 'transparent'
            : get('colors.shadow.extraLight')(props)
          : 'transparent'};
    }
  }
`;

TableBody.defaultProps = {
  zebraStripe: true,
  startIndex: 0,
};

export default TableBody;
