import NavigationTitle from './NavigationTitle';
import * as styles from './styles';
import dotNotation from 'extensions/dotNotation';

const Navigation = styles.Bar;

export default dotNotation(Navigation, {
  Title: NavigationTitle,
  ItemListStack: styles.ItemListStack,
  ItemList: styles.ItemList,
  Item: styles.Item,
  styles: styles,
});
