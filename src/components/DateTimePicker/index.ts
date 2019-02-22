import DateTimePicker from './DateTimePicker';
import DateTimeRangePicker from './DateTimeRangePicker';

import dotNotation from 'extensions/dotNotation';

export default dotNotation(DateTimePicker, {
  Range: DateTimeRangePicker,
});
