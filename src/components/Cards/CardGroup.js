import styled from 'styled-components';
import CardGroupConnected from './CardGroupConnected';

/**
 * @private
 */
const CardGroup = styled.div`
  display: flex;
`;

CardGroup.Connected = CardGroupConnected;

/**
 * @component
 */
export default CardGroup;
