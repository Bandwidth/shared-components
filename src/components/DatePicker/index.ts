import DatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';

import dotNotation from 'extensions/dotNotation';

export default dotNotation(DatePicker, {
  Range: DateRangePicker,
});
