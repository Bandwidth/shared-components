import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationHeading from './Heading';
import NavigationBar from './Bar';

export default styled.div`
  display: flex;
  flex-direction: row;
  color: inherit;

  & > ${NavigationHeading} {
    border-left: ${get('thicknesses.normal')} solid;
    border-left-color: ${get('colors.text.inverted')};
    margin: auto;
    margin-left: 0.5em;
    padding-left: 0.5em;
  }

  ${NavigationBar.Light} > &, ${NavigationBar.Sub} > & {
    & > ${NavigationHeading} {
      border-left-color: ${get('colors.text.default')};
    }
  }

  ${NavigationBar} > &, ${NavigationBar.Dark} > &, ${NavigationBar.Sub} > & {
    margin: auto ${get('spacing.small')} auto 0;
  }
`;
