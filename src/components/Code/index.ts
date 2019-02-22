import Code from './Code';
import CodeBlock from './CodeBlock';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Code, {
  Block: CodeBlock,
});
