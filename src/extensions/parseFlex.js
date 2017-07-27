import { css } from 'styled-components';

const parseFlexChar = char => {
  if (char === '0') {
    return 'flex: 0 0 auto !important;';
  }

  return `flex: ${char} 0 0 !important;`;
};

export default flex => {
  let itemIdx = 0;
  return flex
    .split('')
    .reduce((lines, char, idx) => {
      if (char === ' ') {
        return lines;
      }

      if (flex[idx - 1] === ' ' && flex[idx + 1] === ' ') {
        lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-left: auto !important;
        margin-right: auto !important;
        ${parseFlexChar(char)}
      }`);
      } else if (flex[idx - 1] === ' ') {
        lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-left: auto !important;
        margin-right: 15px !important;
        ${parseFlexChar(char)}
      }`);
      } else if (flex[idx + 1] === ' ') {
        lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-right: auto !important;
        margin-left: 15px !important;
        ${parseFlexChar(char)}
      }`);
      } else {
        lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-right: 15px !important;
        margin-left: 15px !important;
        ${parseFlexChar(char)}
      }`);
      }

      if (idx === 0) {
        lines.push(
          `& > *:nth-child(${itemIdx + 1}) { margin-left: 0 !important; }`,
        );
      }

      if (idx === flex.length - 1) {
        lines.push(
          `& > *:nth-child(${itemIdx + 1}) { margin-right: 0 !important; }`,
        );
      }

      itemIdx = itemIdx + 1;
      return lines;
    }, [])
    .join('\n');
};
