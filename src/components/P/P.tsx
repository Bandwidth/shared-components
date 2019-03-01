import styled from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

export const P = styled.p<SpacingProps>`
  margin: ${userSpacing.text};
  font-size: 1em;
`;

P.defaultProps = {
  spacing: { bottom: 'lg' },
};

export default P;
