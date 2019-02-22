import Alert from './Alert';
import dotNotation from 'extensions/dotNotation';
import SmallAlert from './SmallAlert';

export default dotNotation(Alert, {
  Small: SmallAlert,
});
