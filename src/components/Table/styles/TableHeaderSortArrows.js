import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

export default styled.span`
  margin-left: 8px;
  white-space: nowrap;

  & > a {
    color: var(--colors-gray-medium);
  }
  & > a:focus {
    color: var(--colors-text-inverted);
  }
  & > a::after {
    background: var(--colors-gray-medium);
  }

  ${props => {
    if (props.sortOrder > 0) {
      return css`
        & > *:first-child {
          color: var(--colors-text-inverted);
        }
      `;
    } else if (props.sortOrder < 0) {
      return css`
        & > *:last-child {
          color: var(--colors-text-inverted);
        }
      `;
    }
  }};
`;
