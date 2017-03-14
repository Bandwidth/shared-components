import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import smallTheme from 'shared/themes/small';
import Link from './Link';
import TopNav from './TopNav';
import LogoHeader from './LogoHeader';
import TabGroup from './TabGroup';
import Tab from './TabGroup/Tab';

const Nav = styled.div`
  align-self: flex-end;
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <TopNav>
        <LogoHeader>API Platform</LogoHeader>
        <Nav>
          <ThemeProvider theme={smallTheme}>
            <TabGroup>
              <a href="dev.bandwidth.com"><Tab>Docs</Tab></a>
              <a href="support.bandwidth.com"><Tab>Support</Tab></a>
              <Link to="/account"><Tab>Account</Tab></Link>
              <Link to="/logout"><Tab>Log out</Tab></Link>
            </TabGroup>
          </ThemeProvider>
          <TabGroup>
            <Link to="/numbers"><Tab>My Numbers</Tab></Link>
            <Link to="/applications"><Tab>Applications</Tab></Link>
            <Link to="/sip"><Tab>SIP Configuration</Tab></Link>
          </TabGroup>
        </Nav>
      </TopNav>
    );
  }
}
