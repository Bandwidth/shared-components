import styled from 'styled-components';
import icons from '../Icon/icons';
import theme from '../../theme';

const select = theme
  .register('SearchButton', ({ colors, shadows }) => ({
    backgrounds: {
      default: colors.primary.default,
      hover: colors.primary.alternate,
      disabled: 'transparent',
    },
    colors: {
      default: colors.text.inverted,
      hover: colors.text.inverted,
      disabled: colors.text.default,
    },
    hoverShadow: shadows.short,
    inactiveSize: '2em',
    activeSize: '3em',
    fontSize: '1.5em',
  }))
  .createSelector();

const SearchButtonImpl = theme.connect(styled.button`
  position: relative;
  display: block;
  width: 0;
  overflow: visible;
  background: none;
  border: none;
  padding: 0;
  font-size: ${select('fontSize')};
  outline: none;

  &::before {
    position: absolute;
    top: -0.125em;
    left: -1em;
    font-family: Bandwidth;
    content: "${icons('search')}";
    width: ${select('activeSize')};
    height: ${select('activeSize')};
    line-height: ${select('activeSize')};
    background: ${select('backgrounds.default')};
    color: ${select('colors.default')};
    text-align: center;
    border-radius: 100%;
    transition: 0.2s all ease;
    cursor: pointer;
  }

  &:not(:disabled):hover::before {
    background: ${select('backgrounds.hover')};
    color: ${select('colors.hover')};
    box-shadow: ${select('hoverShadow')};
  }

  &:disabled::before {
    width: ${select('inactiveSize')};
    height: ${select('inactiveSize')};
    top: 0.25em;
    line-height: ${select('inactiveSize')};
    font-size: 1em;
    left: -${select('inactiveSize')};
    background: ${select('backgrounds.disabled')};
    color: ${select('colors.disabled')};
    cursor: default;
  }
`);

export default SearchButtonImpl;
