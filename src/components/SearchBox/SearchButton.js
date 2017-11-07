import styled from 'styled-components';
import icons from '../Icon/icons';

const SearchButtonImpl = styled.button`
  position: relative;
  display: block;
  width: 0;
  overflow: visible;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.5em;
  outline: none;

  &::before {
    position: absolute;
    top: -0.125em;
    left: -1em;
    font-family: Bandwidth;
    content: "${icons('search')}";
    width: 3em;
    height: 3em;
    line-height: 3em;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    border-radius: 100%;
    transition: 0.2s all ease;
    cursor: pointer;
  }

  &:not(:disabled):hover::before {
    background: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: ${({ theme }) => theme.shadows.short};
  }

  &:disabled::before {
    width: 2em;
    height: 2em;
    top: 0.25em;
    line-height: 2em;
    font-size: 1em;
    left: -2em;
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
    cursor: default;
  }
`;

export default SearchButtonImpl;
