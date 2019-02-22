import Select from './Select';
import Searchable from './SearchableSelect';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Select, { Searchable });

export {
  default as popperMatchWidthModifier,
} from './popperMatchWidthModifier';
