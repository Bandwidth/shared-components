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
    suggestions: PropTypes.array.isRequired,
    onSuggestionsFetchRequested: PropTypes.func.isRequired,
    onSuggestionsClearRequested: PropTypes.func.isRequired,
    getSuggestionValue: PropTypes.func,
    renderSuggestionContent: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    showSuggestionsOnFocus: PropTypes.bool,
    alwaysRenderSuggestions: PropTypes.bool,
    getSectionTitle: PropTypes.func,
    inputProps: PropTypes.object,
    onSuggestionSelected: PropTypes.func,
    /**
     * Invoked with the current input value and the content of a suggestion
     * as parameters. Must return an array [startIndex, endIndex] where
     * the value matches the suggestion content, so that the suggestion
     * knows which part of the string to highlight.
     */
    matchSuggestionContent: PropTypes.func,
    showSubmitButton: PropTypes.bool,
    onSubmit: PropTypes.func,
    enableSubmit: PropTypes.bool,
  };

  static defaultProps = {
    renderSuggestionContent: _.identity,
    showSuggestionsOnFocus: false,
    alwaysRenderSuggestions: false,
    getSectionTitle: (sec) => sec.title,
    inputProps: {},
    onSuggestionSelected: null,
    matchSuggestionContent: undefined,
    showSubmitButton: false,
    onSubmit: () => null,
    enableSubmit: false,
    getSuggestionValue: _.identity,
  };

  state = {
    forceShowSuggestions: false,
  };

  handleSuggestionSelected = (event, details) => {
    if (this.props.onSuggestionSelected) {
      this.props.onSuggestionSelected(event, details);
    }

    this.setState({ forceShowSuggestions: false });
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
      {this.props.renderSuggestionContent(suggestion)}
    </Suggestion>
  );

  renderSuggestionsContainer = ({ containerProps, children }) => (
    <SuggestionsContainer {...containerProps}>{children}</SuggestionsContainer>
  );

  renderSectionTitle = (section) => (
    <SuggestionsSectionTitle>{this.props.getSectionTitle(section)}</SuggestionsSectionTitle>
  );

  render() {
    const {
      inputProps,
      onChange,
      value,
      alwaysRenderSuggestions,
      showSubmitButton,
      onSubmit,
      enableSubmit,
    } = this.props;
    const { forceShowSuggestions } = this.state;

    return (
      <Wrapper>
        <Autosuggest
          {...this.props}
          inputProps={{
            ...inputProps,
            onChange,
            value,
            onFocus: (ev, details) => {
              if (inputProps.onFocus) {
                inputProps.onFocus(ev, details);
              }
              if (this.props.showSuggestionsOnFocus) {
                this.setState({ forceShowSuggestions: true });
              }
            },
            onBlur: (ev, details) => {
              if (inputProps.onBlur) {
                inputProps.onBlur(ev, details);
              }
              this.setState({ forceShowSuggestions: false });
            }
          }}
          renderInputComponent={this.renderInput}
          renderSuggestion={this.renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderSectionTitle={this.renderSectionTitle}
          alwaysRenderSuggestions={forceShowSuggestions || alwaysRenderSuggestions}
          onSuggestionSelected={this.handleSuggestionSelected}
        />
        {
          /* Using the button as a glyph if submit is disabled */
          showSubmitButton ?
            <SearchButton onClick={onSubmit} disabled={!enableSubmit} /> :
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
