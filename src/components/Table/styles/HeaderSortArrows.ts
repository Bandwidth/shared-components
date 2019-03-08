import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

interface HeaderSortArrowsProps {
  sortOrder: number;
}

export default styled.span<HeaderSortArrowsProps>`
  margin-left: 8px;
  white-space: nowrap;

  & > a {
    color: ${get('colors.gray.medium')};
  }
  & > a:focus {
    color: ${get('colors.text.inverted')};
  }
  & > a::after {
    background: ${get('colors.gray.medium')};
  }

  ${props => {
    if (props.sortOrder > 0) {
      return css`
        & > *:first-child {
          color: ${get('colors.text.inverted')(props)};
        }
      `;
    } else if (props.sortOrder < 0) {
      return css`
        & > *:last-child {
          color: ${get('colors.text.inverted')(props)};
        }
      `;
    }
  }};
`;
