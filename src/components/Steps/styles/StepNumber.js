import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';
import StepContainer from './StepContainer';

const CIRCLE_SIZE = 32;

export default styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;

  &:before {
    display: inline-block;
    font-size: ${props =>
      props.complete ? (CIRCLE_SIZE * 2) / 3 : (CIRCLE_SIZE * 2) / 5}px;
    content: "${props => {
      console.log(
        'VALUE: ',
        props.complete ? icons('checkmark') : props.number,
      );
      return props.complete ? icons('checkmark') : props.number;
    }}";
    font-family: ${props =>
      props.complete ? 'var(--fonts-icon)' : 'var(--fonts-default)'};
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    line-height: ${CIRCLE_SIZE}px;
    background-color: ${props =>
      props.complete
        ? 'var(--colors-positive-default)'
        : 'var(--colors-background-default)'};
    border-radius: 2em;
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: ${props =>
      props.complete
        ? 'var(colors-positive-default)'
        : 'var(colors-border-light)'};
    text-align: center;
    color: ${props =>
      props.complete
        ? 'var(colors-text-inverted)'
        : 'var(colors-text-default)'};
  }

  ${StepContainer} > & {
    flex: 0 0 auto;
  }
`;
