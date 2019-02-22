import DragBox from './DragBox';
import DragBoxSelect from './DragBoxSelect';

import dotNotation from 'extensions/dotNotation';

export default dotNotation(DragBox, {
  Select: DragBoxSelect,
});
