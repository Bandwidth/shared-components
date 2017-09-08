import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const darkBG = 'rgba(0, 0, 0, 0.05)';
const lightBG = 'transparent';

const TBody = styled.tbody`
  & > tr {
    &:nth-child(odd) {
      background: ${({ zebraStripe, startIndex }) => zebraStripe && (startIndex % 2 === 0) ? darkBG : lightBG };
    }

    &:nth-child(even) {
      background: ${({ zebraStripe, startIndex }) => zebraStripe ? ((startIndex % 2 === 0) ? lightBG : darkBG) : lightBG };
    }
  }
`;

TBody.defaultProps = {
  zebraStripe: true,
  startIndex: 0,
};

export default sharedComponent(`
Used to wrap rows within tables. Allows applying zebra stripe patterns (defaults to on, use \`zebraStripe\` prop to turn off).

Use the \`startIndex\` prop to control what row index this body should assume it's starting with. This can help align zebra stripes if you have multiple bodies in one table.
`)(TBody);
