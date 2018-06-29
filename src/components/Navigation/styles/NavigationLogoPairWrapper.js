import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationHeading from './NavigationHeading';
import NavigationBar from './NavigationBar';

export default styled.div`
  display: flex;
  flex-direction: row;
  color: inherit;

  & > ${NavigationHeading} {
    border-left: var(--thicknesses-normal) solid
      var(--colors-text-inverted);
    margin: auto;
    margin-left: 0.5em;
    padding-left: 0.5em;
  }

  ${NavigationBar} > &, ${NavigationBar.Dark} > &, ${NavigationBar.Sub} > & {
    margin: auto var(--spacing-small) auto 0;
  }
`;
