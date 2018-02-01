import styled from 'styled-components';

const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 53px;

  & > * {
    margin: ${props => {
      switch (props.align) {
        case 'left':
          return 'auto auto auto 0';
        case 'right':
          return 'auto 0 auto auto';
        default:
          return 'auto 0 auto 0';
      }
    }};
  }
`;

export default FieldContent;
