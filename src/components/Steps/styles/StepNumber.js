import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';
import StepContainer from './StepContainer';

const NUMBER_SIZE = '2.5em';

export default styled.div.attrs({
  number: props => (props.complete ? icons('checkmark') : props.number),
  numberFont: props =>
    props.complete ? get('fonts.icon')(props) : get('fonts.default')(props),
  numberColor: props =>
    props.complete
      ? get('colors.positive.default')(props)
      : get('colors.text.default')(props),
  numberBorderColor: props =>
    props.complete
      ? get('colors.positive.border')(props)
      : get('colors.shadow.light')(props),
})`
  &:before {
    display: inline-block;
    content: "${props => props.number}";
    font-family: ${props => props.numberFont};
    width: ${NUMBER_SIZE};
    height: ${NUMBER_SIZE};
    line-height: ${NUMBER_SIZE};
    background-color: ${get('colors.background.default')};
    border-radius: 2em;
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: ${props => props.numberBorderColor};
    text-align: center;
    color: ${props => props.numberColor};
  }

  ${StepContainer} > & {
    flex: 0 0 auto;
  }
`;
