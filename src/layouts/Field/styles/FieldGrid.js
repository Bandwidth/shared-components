import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${themeGet('spacing.large')};
`;

export default FieldGrid;
