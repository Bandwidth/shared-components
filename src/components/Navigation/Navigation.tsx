import NavigationTitle from './NavigationTitle';
import * as styles from './styles';
import dotNotation from 'extensions/dotNotation';

const Navigation = styles.Bar;

/**
 * The header above a page which contains page title and navigation.
 *
 * Navigation provides several sub-components which can be used to construct complex nested controls.
 */
export default dotNotation(Navigation, {
  Title: NavigationTitle,
  ItemListStack: styles.ItemListStack,
  ItemList: styles.ItemList,
  Item: styles.Item,
  styles: styles,
});
