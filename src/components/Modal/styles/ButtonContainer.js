import styled from 'styled-components';
import Horizontal from 'layouts/Horizontal';

const ButtonContainer = styled(Horizontal)`
  padding: 0px 30px 0px 30px;
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
