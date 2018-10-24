import NavigationItemListStack from './styles/NavigationItemListStack';
import NavigationTitle from './NavigationTitle';
import NavigationItemList from './styles/NavigationItemList';
import NavigationItem from './styles/NavigationItem';
import NavigationBar from './styles/NavigationBar';

NavigationBar.Title = NavigationTitle;
NavigationBar.ItemListStack = NavigationItemListStack;
NavigationBar.ItemList = NavigationItemList;
NavigationBar.Item = NavigationItem;

/**
 * @component
 */
export const Navigation = props => <NavigationBar {...props} />;

export default NavigationBar;
