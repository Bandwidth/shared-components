import React from 'react';
import styled from 'styled-components';

const Layout = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.pane.titleFG};
  font-family: ${({ theme }) => theme.pane.titleFontFamily};
  font-weight: ${({ theme }) => theme.pane.titleFontWeight};
  font-size: ${({ theme }) => theme.pane.titleFontSize};
  margin: ${({ theme }) => theme.pane.titleMargin};
  line-height: ${({ theme }) => theme.pane.titleLineHeight};
`;

export default class Pane extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Layout>
        {title ? <Title>{title}</Title> : null}
        {children}
      </Layout>
    );
  }
}