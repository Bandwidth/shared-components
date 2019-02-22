import Input from './Input';
import SmallInput from './SmallInput';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Input, {
  Small: SmallInput,
});
