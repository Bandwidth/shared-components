import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const HeaderWrapper = styled.div`
  color: var(--colors-background-default);
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props =>
    props.image ? `url(${props.image})` : 'var(--colors-primary-dark)'};
  background-size: cover;
  padding: var(--spacing-medium);
  padding-top: var(--spacing-extra-large);
  flex: 1;
`;

export default HeaderWrapper;
