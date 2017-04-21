/**
 * A set of form fields which is grouped in a row
 *
 * You can supply `spacing` as a prop. Spacing can be an int (flex size) or an array of ints (flex size per item)
 */

import styled from 'styled-components';

const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: ${({ align }) => align};

  ${({ spacing }) => {
    if (spacing instanceof Array) {
      return spacing.map((item, idx) => `& > *:nth-child(${idx + 1}) { flex: ${ item}; }`).join('\n');
    }
    return `& > * { flex: ${ spacing}; }`;
  }}
`;

FieldGroup.defaultProps = {
  spacing: '0 1 auto',
  align: 'space-around',
};

export default FieldGroup;
