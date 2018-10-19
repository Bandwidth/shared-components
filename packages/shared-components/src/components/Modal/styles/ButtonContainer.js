import Horizontal from 'layouts/Horizontal';

const ButtonContainer = Horizontal.extend`
  justify-content: ${props => {
    switch (props.align) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      case 'left':
      default:
        return 'flex-start';
    }
  }};
`;

export default ButtonContainer;
