import Breadcrumb from './Breadcrumb';
import Group from './BreadcrumbGroup';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Breadcrumb, {
  Group: Group,
});
