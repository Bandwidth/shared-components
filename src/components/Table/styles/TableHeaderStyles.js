import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableHeaderStyles = styled.th`
  background: ${get('colors.primary.dark')};
  color: ${get('colors.text.inverted')};
  text-transform: uppercase;
  font-weight: 300;
  font-family: ${get('fonts.brand')};
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  text-align: left;
  white-space: nowrap;

  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'default')};

  & > a {
    color: inherit;
  }
  & > a:focus {
    color: inherit;
  }
  & > a::after {
    background: ${get('colors.text.inverted')};
  }
`;

TableHeaderStyles.Small = TableHeaderStyles.extend`
  padding: 3px 8px;
`;

export default TableHeaderStyles;
