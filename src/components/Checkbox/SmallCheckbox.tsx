import Checkbox from './Checkbox';
import defaultProps from 'extensions/defaultProps';

export default defaultProps(Checkbox, {
  Label: (Checkbox.styles.Label as any).Small,
});
