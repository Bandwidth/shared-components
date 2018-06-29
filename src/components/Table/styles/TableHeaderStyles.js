import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableHeaderStyles = styled.th`
  background: var(--colors-primary-dark);
  color: var(--colors-text-inverted);
  text-transform: uppercase;
  font-weight: 300;
  font-family: var(--fonts-brand);
  padding: var(--spacing-small) var(--spacing-medium);
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
    background: var(--colors-text-inverted);
  }
`;

TableHeaderStyles.Small = styled(TableHeaderStyles)`
  padding: 3px 8px;
`;

export default TableHeaderStyles;
