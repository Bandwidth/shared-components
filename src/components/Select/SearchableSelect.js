import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import * as styles from './styles';

const defaultFilterOptions = (options, inputValue, props) =>
  options.filter(option =>
    (props.renderOption(option) || '')
      .toLowerCase()
      .includes((inputValue || '').toLowerCase()),
  );

export default class SearchableSelect extends React.Component {
  static propTypes = {
    ...Select.propTypes,
    /**
     * A filtering function which takes the options list, the
     * current input value, and all props.
     * Should return a reduced list of options.
     */
    filterOptions: PropTypes.func,
  };

  static defaultProps = {
    ...Select.defaultProps,
    filterOptions: defaultFilterOptions,
    CurrentValue: styles.SearchableCurrentValue,
  };

  static styles = {
    ...styles,
    CurrentValue: styles.SearchableCurrentValue,
  };

  state = {
    filteredOptions: this.props.options,
    inputValue: '',
  };

  handleSelectStateChange = (changes, downshiftState) => {
    const { filterOptions, options, onStateChange } = this.props;

    if (changes.hasOwnProperty('isOpen') && changes.isOpen) {
      this.setState({
        inputValue: changes.selectedItem || '',
        filteredOptions: options,
      });
    }

    if (changes.hasOwnProperty('inputValue')) {
      this.setState({
        inputValue: changes.inputValue,
        filteredOptions: filterOptions(options, changes.inputValue, this.props),
      });
    }

    onStateChange && onStateChange(changes, downshiftState);
  };

  render() {
    const { options, onStateChange, CurrentValue, ...rest } = this.props;

    return (
      <Select
        {...rest}
        CurrentValue={CurrentValue}
        onStateChange={this.handleSelectStateChange}
        options={this.state.filteredOptions}
        inputValue={this.state.inputValue}
      />
    );
  }
}
