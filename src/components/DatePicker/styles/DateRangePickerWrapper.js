import styled from 'styled-components';
import baseCss from './reactDatesCss';
import overridesCss from './overridesCss';

const WIDTH = 550;

export default styled.div`
  ${baseCss} ${overridesCss} .DateRangePicker {
    width: ${WIDTH}px;
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 2}px !important;
  }
`;
