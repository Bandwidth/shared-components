import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const CardSection = styled.div`
  padding: var(--spacing-medium);
  &:not(:last-of-type) {
    border-bottom-color: var(--colors-border-medium);
    border-bottom-width: var(--thicknesses-normal);
    border-bottom-style: solid;
  }

  & > * {
    margin: 0;
  }
`;

/**
 * @component
 */
export default CardSection;
