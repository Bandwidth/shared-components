import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

export const SIZE = '1.2em';

const AlertIcon = styled.i`
  width: ${SIZE};
  height: ${SIZE};
  margin-right: 1em;
  display: inline-block;

  &::before {
    content: ${({ type }) => {
      switch (type) {
        case 'success':
          return `"${icons('checkmark')}"`;
        case 'error':
          return '"!"';
        default:
          return '"i"';
      }
    }};

    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: ${(props) => {
      switch (props.type) {
        case 'success':
          return get('colors.positive.default')(props);
        case 'error':
          return get('colors.negative.default')(props);
        default:
          return get('colors.primary.default')(props);
      }
    }};

    background: ${get('colors.background.default')};
    width: ${SIZE};
    height: ${SIZE};
    display: inline-block;
    line-height: ${SIZE};
    font-family: ${get('fonts.icon')};
    text-align: center;
    border-radius: 100%;
    font-size: calc(${SIZE} - 0.3em);
    position: absolute;
    font-style: normal;
  }
`;

export default AlertIcon;
