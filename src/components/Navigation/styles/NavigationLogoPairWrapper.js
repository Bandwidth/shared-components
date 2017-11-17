import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationHeading from './NavigationHeading';
import NavigationBar from './NavigationBar';

export default styled.div`
  display: flex;
  flex-direction: row;
  color: inherit;

  & > ${NavigationHeading} {
    border-left: ${get('thicknesses.normal')} solid
      ${get('colors.text.inverted')};
    margin-left: 0.5em;
    padding-left: 0.5em;
  }

  ${NavigationBar} > &, ${NavigationBar.Dark} > &, ${NavigationBar.Sub} > & {
    margin: auto ${get('spacing.small')} auto 0;
  }
`;
