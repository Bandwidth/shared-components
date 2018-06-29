import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';
import StepContainer from './StepContainer';

const NUMBER_SIZE = '2.5em';

export default styled.div.attrs({
  number: props => (props.complete ? icons('checkmark') : props.number),
  numberFont: props =>
    props.complete ? 'var(--fonts-icon)' : 'var(--fonts-default)',
  numberColor: props =>
    props.complete
      ? 'var(--colors-positive-dark)'
      : 'var(--colors-text-default)',
  numberBorderColor: props =>
    props.complete
      ? 'var(--colors-positive-border)'
      : 'var(--colors-shadow-light)',
})`
  &:before {
    display: inline-block;
    content: "${props => props.number}";
    font-family: ${props => props.numberFont};
    width: ${NUMBER_SIZE};
    height: ${NUMBER_SIZE};
    line-height: ${NUMBER_SIZE};
    background-color: var(--colors-background-default);
    border-radius: 2em;
    border-width: var(--thicknesses-normal);
    border-style: solid;
    border-color: ${props => props.numberBorderColor};
    text-align: center;
    color: ${props => props.numberColor};
  }

  ${StepContainer} > & {
    flex: 0 0 auto;
  }
`;
