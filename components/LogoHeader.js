import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.header.fontSize};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  line-height: 30px;
  border-left: 1px solid;
  margin-left: 0.5em;
  padding-left: 0.5em;
  height: 30px;
  display: inline-block;
  font-family: ${({ theme }) => theme.header.fontFamily};
`;

class LogoHeader extends React.Component {
  static propTypes = {
    children: PropTypes.string,
  };

  static defaultProps = {
    children: 'Bandwidth',
  };

  render() {
    return (
      <Container>
        <Logo />
        <Text>{this.props.children}</Text>
      </Container>
    );
  }
}

LogoHeader.usage = `
# LogoHeader

LogoHeader is mostly used for the top nav. It's just like Header, except it renders a logo before the text you supply.

\`\`\`
<LogoHeader>Bandwidth</LogoHeader>
\`\`\`
`;

export default LogoHeader;