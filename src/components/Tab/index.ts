import Tab from './Tab';
import VerticalTab from './VerticalTab';
import Group from './TabGroup';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Tab, {
  Group,
  Vertical: VerticalTab,
});
