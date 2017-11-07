import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme.register('SearchSuggestionsSectionTitle', ({ colors, spacing }) => ({
    color: colors.text.default,
    padding: `${spacing.extraSmall} ${spacing.small}`,
    margin: 0,
    fontWeight: 800,
    fontSize: '0.95em',
    background: colors.gray.light,
  }))
  .createSelector();

export default theme.connect(styled.h5`
  ${spreadStyles(select)}
`);
