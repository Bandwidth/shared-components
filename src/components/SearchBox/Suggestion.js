import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

const Container = styled.div`
  background: ${({ theme, isHighlighted }) => isHighlighted ? theme.colors.primaryLight : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: block;
  padding: ${({ theme }) => theme.padding.small};
  cursor: pointer;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

const defaultMatcher = (query, content) => {
  const lowerQuery = query.toLowerCase();
  const lowerContent = content.toLowerCase();
  return [
    lowerContent.indexOf(lowerQuery),
    lowerContent.indexOf(lowerQuery) + lowerQuery.length
  ];
};

export default class Suggestion extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    query: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    matchSuggestionContent: PropTypes.func,
  };

  static defaultProps = {
    matchSuggestionContent: defaultMatcher,
  };

  renderContents = () => {
    const { children, query, matchSuggestionContent } = this.props;
    if (_.isString(children) && query) {
      const indices = matchSuggestionContent(query, children);
      if (indices[0] === -1) {
        // no match
        return children;
      }

      const parts = [
        children.substring(0, indices[0]),
        children.substring(indices[0], indices[1]),
        children.substring(indices[1])
      ];

      return (
        <span>
          {parts[0]}
          {(parts[1] || children === query) && <Highlight>{parts[1]}</Highlight>}
          {parts[2]}
        </span>
      );
    }

    return children;
  }

  render() {
    const { isHighlighted } = this.props;

    return (
      <Container isHighlighted={isHighlighted}>
        {this.renderContents()}
      </Container>
    );
  }
}
