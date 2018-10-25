import styled from 'styled-components';

export default styled.div`
  position: relative;
  overflow-y: ${props => (props.horizontal ? 'hidden' : 'auto')};
  overflow-x: ${props => (props.horizontal ? 'auto' : 'hidden')};
  height: ${props => (props.horizontal ? 'auto' : '100%')};
  width: ${props => (props.horizontal ? '100%' : 'auto')};

  display: ${props => (props.horizontal ? 'flex' : 'block')};
  flex-direction: ${props => (props.horizontal ? 'row' : 'none')};

  & > * {
    flex: 0 0 auto;
  }
`;
