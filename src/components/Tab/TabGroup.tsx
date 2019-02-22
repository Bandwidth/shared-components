import React from 'react';
import { defaultProps } from 'recompose';
import * as styles from './styles';

interface TabGroupProps {
  /**
   * Tab elements within container
   */
  children: React.ReactNode;
  /**
   * Called when user selects the tab
   */
  onTabSelected: (index: number) => void;
  /**
   * The currently selected tab
   */
  selectedTabIndex: number;
  /**
   * Override the component used to render the Tab list
   */
  List: any;
}

interface TabProps {
  active?: boolean;
  disabled?: boolean;
  onClick: Function;
}

class TabGroup extends React.Component<TabGroupProps> {
  static defaultProps = {
    List: styles.List,
  };

  static Vertical = defaultProps({
    //@ts-ignore
    List: styles.List.Vertical,
  })(TabGroup);

  /**
   * Creates a click handler for a tab which preserves its own
   * onClick usage, and also hooks in so that this component can
   * appropriately call its onTabSelected callback with the right
   * index.
   */
  createTabClickHandler = (tab, index: number) =>
    this.props.onTabSelected
      ? ev => {
          if (tab.props.onClick) {
            tab.props.onClick(ev);
          }
          this.props.onTabSelected(index);
        }
      : tab.props.onClick;

  renderTabs = () =>
    React.Children.map(
      this.props.children,
      (child: React.ReactElement<TabProps>, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // rendering Tab
        return React.cloneElement<TabProps>(child, {
          onClick:
            child.props.disabled || child.props.active
              ? null
              : this.createTabClickHandler(child, index),
          active: index === this.props.selectedTabIndex,
        });
      },
    );

  render() {
    const { List, onTabSelected, ...rest } = this.props;

    return <List {...rest}>{this.renderTabs()}</List>;
  }
}

export default TabGroup;
