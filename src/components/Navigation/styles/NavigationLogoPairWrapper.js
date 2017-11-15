import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationHeading from './NavigationHeading';




export default styled.div`
  display: flex;
  flex-direction: row;

  & > ${NavigationHeading} {
    border-left: ${get('thicknesses.normal')} solid ${get('colors.text.inverted')};
    margin-left: 0.5em;
    padding-left: 0.5em;
  }
`;
