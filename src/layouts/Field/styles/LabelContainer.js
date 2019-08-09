import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

LabelContainer.defaultProps = {
  className: "scl-field-label"
}

export default LabelContainer;
