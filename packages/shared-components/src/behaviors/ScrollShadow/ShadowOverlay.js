import styled from 'styled-components';

const ShadowOverlay = styled.div`
  transition: 0.05s ease box-shadow;
  position: ${props => (props.entireViewport ? 'fixed' : 'absolute')};
  z-index: ${props => (props.entireViewport ? 'auto' : '5')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

export default ShadowOverlay;
