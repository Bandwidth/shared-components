import NavigationItemListStack from './styles/NavigationItemListStack';
import NavigationTitle from './NavigationTitle';
import { NavigationItemList, NavigationItem, NavigationBar } from './styles';

NavigationBar.Title = NavigationTitle;
NavigationBar.ItemListStack = NavigationItemListStack;
NavigationBar.ItemList = NavigationItemList;
NavigationBar.Item = NavigationItem;

/**
 * @component
 */
export const Navigation = props => <NavigationBar {...props} />;

export default NavigationBar;
