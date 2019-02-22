import styled from 'styled-components';
import get from 'extensions/themeGet';

const NewBadge = styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    display: inline-block;
    color: ${get('colors.primary.default')};
    font-weight: bold;
    font-size: 0.85em;
    margin: 0 1em 0 0;
    text-transform: uppercase;
  }
`;

export default NewBadge;
