import styled from 'styled-components';

export default styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => (props.horizontal ? 'auto' : '100%')};
  width: ${props => (props.horizontal ? '100%' : 'auto')};
`;
