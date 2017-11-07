import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import Input from '../Input';
import Suggestion from './Suggestion';
import SuggestionsContainer from './SuggestionsContainer';
import SuggestionsSectionTitle from './SuggestionsSectionTitle';
import SearchButton from './SearchButton';
import _ from 'lodash';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > .react-autosuggest__container {
    width: 100%;

    & input {
      padding-right: 2em;
    }
  }

  & > button {
    margin: 0 0 auto 0;
  }
`;

class SearchBox extends React.Component {
  static propTypes = {
    /**
     * An array of suggestions. Suggestions can be any shape you like.
     */
    suggestions: PropTypes.array.isRequired,
    /**
     * Called when the component needs to refresh suggestions. ({ value, reson }) => {}
     */
    onSuggestionsFetchRequested: PropTypes.func.isRequired,
    /**
     * Called when suggestions need to be reset.
     */
    onSuggestionsClearRequested: PropTypes.func.isRequired,
    /**
     * Computes a value from a single suggestion item. (suggestion) => value
     */
    getSuggestionValue: PropTypes.func.isRequired,
    /**
     * Turns a suggestion into a renderable item. Can be a string or a node.
     * (suggestion, filterValue) => node
     */
    renderSuggestionContent: PropTypes.func,
    /**
     * Called when the value changes. (event, { newValue, method }) => {}
     */
    onChange: PropTypes.func.isRequired,
    /**
     * The current value in the search field.
     */
    value: PropTypes.any.isRequired,
    /**
     * Whether suggestions should always be shown
     */
    alwaysRenderSuggestions: PropTypes.bool,
    /**
     * Computes a title from a section object. Has a default (section) => seciton.title
     */
    getSectionTitle: PropTypes.func,
    /**
     * Computes the suggestions for a section. Has a default (section) => section.suggestions
     */
    getSectionSuggestions: PropTypes.func,
    /**
     * Additional props to pass to the input element
     */
    inputProps: PropTypes.object,
    /**
     * Called when the user selects something
     */
    onSuggestionSelected: PropTypes.func,
    /**
     * Invoked with the current input value and the content of a suggestion
     * as parameters. Must return an array [startIndex, endIndex] where
     * the value matches the suggestion content, so that the suggestion
     * knows which part of the string to highlight.
     *
     * Example, matchSuggestionContent('rg', 'corgi') = [2,4]
     *
     * The default for this will match case-insensitive
     */
    matchSuggestionContent: PropTypes.func,
    /**
     * Whether to render a button for submitting the search
     */
    showSubmitButton: PropTypes.bool,
    /**
     * Called when the user activates the search button
     */
    onSubmit: PropTypes.func,
    /**
     * Passed the current search value, calculates whether the submit button
     * should be enabled.
     */
    shouldShowSubmitButton: PropTypes.func,
  };

  static defaultProps = {
    renderSuggestionContent: _.identity,
    alwaysRenderSuggestions: false,
    getSectionTitle: (sec) => sec.title,
    getSectionSuggestions: (sec) => sec.suggestions,
    inputProps: {},
    onSuggestionSelected: null,
    matchSuggestionContent: undefined,
    showSubmitButton: false,
    onSubmit: () => null,
    shouldShowSubmitButton: () => false,
  };

  renderInput = ({ ref, ...inputProps }) => {
    const self = this;
    return (
      <Input
        {...inputProps}
        inputRef={ref}
      />
    );
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => (
    <Suggestion
      query={query}
      isHighlighted={isHighlighted}
      matchSuggestionContent={this.props.matchSuggestionContent}
    >
      {this.props.renderSuggestionContent(suggestion, query)}
    </Suggestion>
  );

  renderSuggestionsContainer = ({ containerProps, children }) => children ? (
    <SuggestionsContainer {...containerProps}>{children}</SuggestionsContainer>
  ) : null;

  renderSectionTitle = (section) => (
    <SuggestionsSectionTitle>{this.props.getSectionTitle(section)}</SuggestionsSectionTitle>
  );

  render() {
    const {
      inputProps,
      onChange,
      value,
      showSubmitButton,
      onSubmit,
      shouldShowSubmitButton,
    } = this.props;

    return (
      <Wrapper>
        <Autosuggest
          {...this.props}
          inputProps={{
            ...inputProps,
            onChange,
            value,
          }}
          renderInputComponent={this.renderInput}
          renderSuggestion={this.renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderSectionTitle={this.renderSectionTitle}
        />
        {
          /* Using the button as a glyph if submit is disabled */
          showSubmitButton ?
            <SearchButton onClick={onSubmit} disabled={!shouldShowSubmitButton(value)} /> :
            <SearchButton disabled />
        }
      </Wrapper>
    );
  }
}

SearchBox.Suggestion = Suggestion;
SearchBox.SuggestionsContainer = SuggestionsContainer;
SearchBox.SuggestionsSectionTitle = SuggestionsSectionTitle;
SearchBox.Button = SearchButton;

export default SearchBox;
