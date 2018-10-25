import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import {
  TabList as DefaultTabList,
  TabContainer,
  TabContent,
  Tab,
} from './styles';

class Tabs extends React.Component {
  static propTypes = {
    /**
     * Tab elements within container
     */
    children: PropTypes.node.isRequired,
    /**
     * Called when user selects the tab
     */
    onTabSelected: PropTypes.func,
    /**
     * The currently selected tab
     */
    selectedTabIndex: PropTypes.number,
    /**
     * Override the component used to render the Tab list
     */
    List: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    onTabSelected: null,
    List: DefaultTabList,
  };

  /**
   * Creates a click handler for a tab which preserves its own
   * onClick usage, and also hooks in so that this component can
   * appropriately call its onTabSelected callback with the right
   * index.
   */
  createTabClickHandler = (tab, index) =>
    this.props.onTabSelected
      ? ev => {
          if (tab.props.onClick) {
            tab.props.onClick(ev);
          }
          this.props.onTabSelected(index);
        }
      : tab.props.onClick;

  renderTabs = () =>
    React.Children.map(this.props.children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // rendering Tab
      return React.cloneElement(child, {
        onClick:
          child.props.disabled || child.props.active
            ? null
            : this.createTabClickHandler(child, index),
        active: index === this.props.selectedTabIndex,
      });
    });

  render() {
    const { List } = this.props;

    return <List>{this.renderTabs()}</List>;
  }
}

Tabs.Vertical = withProps({
  List: DefaultTabList.Vertical,
})(Tabs);

Tabs.Tab = Tab;
Tabs.Container = TabContainer;
Tabs.Content = TabContent;

export default Tabs;
