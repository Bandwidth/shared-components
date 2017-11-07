import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import theme from '../../theme';

const select = theme
  .register('SearchSuggestion', ({ colors, spacing }) => ({
    backgrounds: {
      default: colors.background.default,
      active: colors.primary.light,
    },
    colors: {
      default: colors.text.default,
      matched: colors.primary.default,
    },
    padding: spacing.small,
    matchedFontWeight: 'bold',
  }))
  .createSelector();

const Container = theme.connect(styled.div`
  background: ${(props) => props.isHighlighted ?
    select('backgrounds.active')(props) :
    select('backgrounds.default')(props)
  };
  color: ${select('colors.default')};
  display: block;
  padding: ${select('padding')};
  cursor: pointer;
`, { pure: false });

const Highlight = theme.connect(styled.span`
  color: ${select('colors.matched')};
  font-weight: ${select('matchedFontWeight')};
`);

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
