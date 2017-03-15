import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: ${({ theme }) => theme.metric.border};
  background: ${({ theme }) => theme.metric.bg};
  color: ${({ theme }) => theme.metric.fg};
  display: flex;
  flex-direction: column;
  min-width: 240px;
  height: 240px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.metric.accent};
  }
`;

const Figure = styled.h1`
  margin: auto;
  font-size: ${({ theme }) => theme.metric.figureFontSize};
  font-weight: ${({ theme }) => theme.metric.figureFontWeight};
  font-family: ${({ theme }) => theme.metric.figureFontFamily};
`;

const Details = styled.span`
  margin: auto;
  font-size: ${({ theme }) => theme.metric.detailsFontSize};
  font-family: ${({ theme }) => theme.metric.detailsFontFamily};
`;

export default class Metric extends React.Component {
  static propTypes = {
    figure: React.PropTypes.node,
    details: React.PropTypes.node,
  };

  static defaultProps = {
    figure: 0,
    details: 'loading...',
  };

  render() {
    const { figure, details } = this.props;

    return (
      <Box>
        <Figure>{figure}</Figure>
        <Details>{details}</Details>
      </Box>
    );
  }
}
