import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const CardWrapper = styled.div`
  height: auto;
  vertical-align: top;
  flex: 1;
  border-radius: 5px;
  margin: var(--spacing-medium);
  box-shadow: var(--shadows-long);
  border-color: var(--colors-border-medium);
  border-width: 0 var(--thicknesses-normal) var(--thicknesses-normal)
    var(--thicknesses-normal);
  border-style: solid;
  overflow: hidden;
`;

export default CardWrapper;
