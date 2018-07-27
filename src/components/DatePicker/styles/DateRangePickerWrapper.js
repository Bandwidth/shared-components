import styled from 'styled-components';
import baseCss from './baseCss';
import overridesCss from './overridesCss';

const WIDTH = 554;

export default styled.div`
  ${baseCss} ${overridesCss} .DateRangePicker {
    width: ${WIDTH}px;
  }
`;
