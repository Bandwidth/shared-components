import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 ${get('spacing.medium')} 0;

  & > h3 {
    color: ${get('colors.text.default')};
    margin: 0;
    margin-top: 3px;
    padding: 0 1em 0 1em;
    font-family: ${get('fonts.brand')};
    font-weight: 300;
    flex: 0 0 auto;
    text-transform: uppercase;
  }

  & > span {
    border-top-width: ${get('thicknesses.normal')};
    border-top-style: solid;
    border-top-color: ${get('colors.gray.border')};
    flex: 1;
    margin: auto;
  }
`;
