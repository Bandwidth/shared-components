import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`

`;

const Content = styled.div`
  padding: 0;
  margin: 0;
`;

const Title = styled.h2`
  background: #dedede;
  display: block;
  padding: 5px 30px;
  margin: 0;
  font-size: 0.85em;
  font-weight: 800;
  text-transform: uppercase;
`;

export default class PaneSection extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    return (
      <Wrap>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <Content>{this.props.children}</Content>
      </Wrap>
    );
  }
}