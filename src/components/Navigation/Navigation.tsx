import NavigationTitle, { NavigationTitleProps } from './NavigationTitle';
import * as styles from './styles';
import { NavigationBar } from './styles/Bar';

interface Navigation extends NavigationBar {
  Title?: React.ComponentClass<NavigationTitleProps>;
  ItemListStack?: any;
  ItemList?: any;
  Item?: any;
  styles?: any;
}

const Navigation: Navigation = styles.Bar;

Navigation.Title = NavigationTitle;
Navigation.ItemListStack = styles.ItemListStack;
Navigation.ItemList = styles.ItemList;
Navigation.Item = styles.Item;
Navigation.styles = styles;

export default Navigation;
