import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import AlertContent from './AlertContent';

export const SIZE = '31px';
const SMALL_SIZE = '18px';

const getAlertIcon = size => styled.i`
  width: ${size};
  height: ${size};
  display: inline-block;
  border-color: inherit;

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

    box-sizing: border-box;
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: inherit;

    background: ${get('colors.background.default')};
    width: ${size};
    height: ${size};
    display: inline-block;
    line-height: ${size};
    font-family: ${props => {
      switch (props.type) {
        case 'success':
          return get('fonts.icon');
        case 'error':
        default:
          return get('fonts.brand');
      }
    }};
    font-weight: ${props => {
      switch (props.type) {
        case 'success':
          return 'normal';
        default:
          return 500;
      }
    }};
    border-color: ${({ theme, type }) => {
      switch (type) {
        case 'success':
          return get('colors.positive.border');
        case 'error':
          return get('colors.negative.border');
        default:
          return get('colors.primary.border');
      }
    }};
    text-align: center;
    border-radius: 100%;
    font-size: 22px;
    position: absolute;
    font-style: normal;
  }
`;

const AlertIcon = getAlertIcon(SIZE);
AlertIcon.Small = getAlertIcon(SMALL_SIZE).extend`
  &::before {
    font-size: 14px;
  }

  ${AlertContent.Small} > & {
    margin: 0 5px auto 0;
  }
`;

export default AlertIcon;
