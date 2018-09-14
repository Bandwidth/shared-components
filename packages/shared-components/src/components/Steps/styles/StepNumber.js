import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';
import StepContainer from './StepContainer';

const CIRCLE_SIZE = 32;

export default styled.div.attrs({
  number: props => (props.complete ? icons('checkmark') : props.number),
  numberFont: props =>
    props.complete ? get('fonts.icon')(props) : get('fonts.default')(props),
  numberColor: props =>
    props.complete
      ? get('colors.text.inverted')(props)
      : get('colors.text.default')(props),
  numberBorderColor: props =>
    props.complete
      ? get('colors.positive.default')(props)
      : get('colors.border.light')(props),
})`
  &:before {
    display: inline-block;
    font-size: ${props =>
      props.complete ? (CIRCLE_SIZE * 2) / 3 : (CIRCLE_SIZE * 2) / 5}px;
    content: "${props => props.number}";
    font-family: ${props => props.numberFont};
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    line-height: ${CIRCLE_SIZE}px;
    background-color: ${props =>
      props.complete
        ? get('colors.positive.default')(props)
        : get('colors.background.default')(props)};
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
