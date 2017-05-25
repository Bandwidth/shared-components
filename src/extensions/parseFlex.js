import { css } from 'styled-components';

const parseFlexChar = (char) => {
  if (char === '0') {
    return 'flex: 0 0 auto;';
  }

  return `flex: ${char} 0 auto;`
}

export default (flex) => {
  let itemIdx = 0;
  return flex.split('').reduce((lines, char, idx) => {
    if (char === ' ') {
      return lines;
    }

    if (flex[idx - 1] === ' ' && flex[idx + 1] === ' ') {
      lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-left: auto;
        margin-right: auto;
        ${parseFlexChar(char)}
      }`);
    } else if (flex[idx - 1] === ' ') {
      lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-left: auto;
        margin-right: 15px;
        ${parseFlexChar(char)}
      }`);
    } else if (flex[idx + 1] === ' ') {
      lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-right: auto;
        margin-left: 15px;
        ${parseFlexChar(char)}
      }`);
    } else {
      lines.push(`& > *:nth-child(${itemIdx + 1}) {
        margin-right: 15px;
        margin-left: 15px;
        ${parseFlexChar(char)}
      }`);
    }

    if (idx === 0) {
      lines.push(`& > *:nth-child(${itemIdx + 1}) { margin-left: 0; }`);
    }

    if (idx === flex.length - 1) {
      lines.push(`& > *:nth-child(${itemIdx + 1}) { margin-right: 0; }`);
    }

    itemIdx = itemIdx + 1;
    return lines;
  }, [])
  .join('\n');
}
