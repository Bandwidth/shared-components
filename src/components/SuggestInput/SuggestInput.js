import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import Input from '../Input';
import Suggestion from './Suggestion';
import SuggestionsContainer from './SuggestionsContainer';
import SuggestionsSectionTitle from './SuggestionsSectionTitle';
import _ from 'lodash';

class SuggestInput extends React.Component {
  static propTypes = {
    suggestions: PropTypes.array.isRequired,
    onSuggestionsFetchRequested: PropTypes.func.isRequired,
    onSuggestionsClearRequested: PropTypes.func.isRequired,
    getSuggestionValue: PropTypes.func.isRequired,
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
  };

  static defaultProps = {
    renderSuggestionContent: _.identity,
    showSuggestionsOnFocus: false,
    alwaysRenderSuggestions: false,
    getSectionTitle: (sec) => sec.title,
    inputProps: {},
    onSuggestionSelected: null,
    matchSuggestionContent: undefined,
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
    const { inputProps, onChange, value, alwaysRenderSuggestions } = this.props;
    const { forceShowSuggestions } = this.state;

    return (
      <Autosuggest
        {...this.props}
        inputProps={{
          ...inputProps,
          onChange,
          value,
          onFocus: (a, b, c, d, e) => {
            console.log('focus');
            if (inputProps.onFocus) {
              inputProps.onFocus(a, b, c, d, e);
            }
            if (this.props.showSuggestionsOnFocus) {
              this.setState({ forceShowSuggestions: true });
            }
          },
          onBlur: (a, b, c, d, e) => {
            console.log('blur');
            if (inputProps.onBlur) {
              inputProps.onBlur(a, b, c, d, e);
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
    );
  }
}

SuggestInput.Suggestion = Suggestion;
SuggestInput.SuggestionsContainer = SuggestionsContainer;
SuggestInput.SuggestionsSectionTitle = SuggestionsSectionTitle;

export default SuggestInput;
