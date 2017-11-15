import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import NavigationItems, { linksPropType } from './NavigationItems';
import DefaultLogoHeader from './LogoHeader';
import theme from '../../theme';
import Anchor from '../Anchor/Anchor';
import NavigationBar from './styles/NavigationBar';
import NavigationLinksArea from './styles/NavigationLinkArea';

class Navigation extends React.Component {
  static propTypes = {
    /**
     * The title to render within the navigation header (optional)
     */
    title: PropTypes.string,
    /**
     * A list of links to include in the main navigation.
     */
    links: linksPropType.isRequired,
    /**
     * A list of links to include above the main links (optional).
     */
    topLinks: linksPropType,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * A location url when logo is clicked.
     */
    logoLocation: PropTypes.string,
    /**
     * A component for rendering the logo and link
     */
    LogoHeader: PropTypes.func,
    /**
     * A component for rendering the outer container of the navigation
     */
    Bar: PropTypes.func,
    /**
     * A component for rendering the container for links
     */
    LinksArea: PropTypes.func,
    /**
     * A component for rendering the nav items. Defaults NavigationItems. Must have a .Small variant.
     */
    Items: PropTypes.func,
  };

  static defaultProps = {
    topLinks: null,
    title: null,
    className: null,
    id: null,
    LogoHeader: DefaultLogoHeader,
    Bar: NavigationBar,
    LinksArea: NavigationLinksArea,
    Items: NavigationItems,
  };

  render() {
    const {
      title,
      links,
      topLinks,
      id,
      className,
      logoLocation,
      Bar,
      LinksArea,
      LogoHeader,
      Items,
    } = this.props;

    return (
      <Bar id={id} className={className}>
        {title && <LogoHeader linkTo={logoLocation}>{title}</LogoHeader>}
        <LinksArea>
          {topLinks && <Items.Small links={topLinks} />}
          <Items links={links} />
        </LinksArea>
      </Bar>
    );
  }
}

Navigation.Sub = withProps({
  Bar: NavigationBar.Sub,
  Items: NavigationItems.Dark,
})(Navigation);
Navigation.Dark = withProps({
  Bar: NavigationBar.Dark,
  Items: NavigationItems.Dark,
})(Navigation);

export default Navigation;
