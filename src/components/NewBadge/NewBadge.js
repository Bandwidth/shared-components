import styled from 'styled-components';

const NewBadge = styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    text-transform: uppercase;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 0.85em;
    margin-right: 1em;
  }
`;

export default NewBadge;
