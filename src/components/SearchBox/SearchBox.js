import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import DefaultInput from '../Input';
import SearchBoxSuggestion from './Suggestion';
import SearchBoxSuggestionsList from './styles/SearchBoxSuggestionsList';
import SearchBoxSuggestionsSectionTitle from './styles/SearchBoxSuggestionsSectionTitle';
import SearchBoxSearchButton from './styles/SearchBoxSearchButton';
import SearchBoxWrapper from './styles/SearchBoxWrapper';
import identity from 'lodash.identity';

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
    /**
     * A component to render a wrapper around the box
     */
    Wrapper: PropTypes.func,
    /**
     * A component to render the list of suggestions
     */
    SuggestionsList: PropTypes.func,
    /**
     * A component to render a search button integrated into the field
     */
    SearchButton: PropTypes.func,
    /**
     * A component to render a section title in the suggestions list
     */
    SuggestionsSectionTitle: PropTypes.func,
    /**
     * A component to render a suggestion item
     */
    Suggestion: PropTypes.func,
    /**
     * A component to render the input element (defaults Input)
     */
    Input: PropTypes.func,
  };

  static defaultProps = {
    renderSuggestionContent: identity,
    alwaysRenderSuggestions: false,
    getSectionTitle: sec => sec.title,
    getSectionSuggestions: sec => sec.suggestions,
    inputProps: {},
    onSuggestionSelected: null,
    matchSuggestionContent: undefined,
    showSubmitButton: false,
    onSubmit: () => null,
    shouldShowSubmitButton: () => false,
    Wrapper: SearchBoxWrapper,
    SuggestionsList: SearchBoxSuggestionsList,
    SuggestionsSectionTitle: SearchBoxSuggestionsSectionTitle,
    SearchButton: SearchBoxSearchButton,
    Suggestion: SearchBoxSuggestion,
    Input: DefaultInput,
  };

  renderInput = ({ ref, ...inputProps }) => {
    const self = this;
    return <this.props.Input {...inputProps} inputRef={ref} />;
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => (
    <this.props.Suggestion
      query={query}
      isHighlighted={isHighlighted}
      matchSuggestionContent={this.props.matchSuggestionContent}
    >
      {this.props.renderSuggestionContent(suggestion, query)}
    </this.props.Suggestion>
  );

  renderSuggestionsContainer = ({ containerProps, children }) =>
    children ? (
      <this.props.SuggestionsList {...containerProps}>
        {children}
      </this.props.SuggestionsList>
    ) : null;

  renderSectionTitle = section => (
    <this.props.SuggestionsSectionTitle>
      {this.props.getSectionTitle(section)}
    </this.props.SuggestionsSectionTitle>
  );

  render() {
    const {
      inputProps,
      onChange,
      value,
      showSubmitButton,
      onSubmit,
      shouldShowSubmitButton,
      Wrapper,
      SearchButton,
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
        {/* Using the button as a glyph if submit is disabled */
        showSubmitButton ? (
          <SearchButton
            onClick={onSubmit}
            disabled={!shouldShowSubmitButton(value)}
          />
        ) : (
          <SearchButton disabled />
        )}
      </Wrapper>
    );
  }
}

SearchBox.Suggestion = SearchBoxSuggestion;
SearchBox.SuggestionsList = SearchBoxSuggestionsList;
SearchBox.SuggestionsSectionTitle = SearchBoxSuggestionsSectionTitle;
SearchBox.Button = SearchBoxSearchButton;

export default SearchBox;
