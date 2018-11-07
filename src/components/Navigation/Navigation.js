import NavigationTitle from './NavigationTitle';
import * as styles from './styles';

const NavigationBar = styles.Bar;

NavigationBar.Title = NavigationTitle;
NavigationBar.ItemListStack = styles.ItemListStack;
NavigationBar.ItemList = styles.ItemList;
NavigationBar.Item = styles.Item;
NavigationBar.styles = styles;

/**
 * @component
 */
export default NavigationBar;
