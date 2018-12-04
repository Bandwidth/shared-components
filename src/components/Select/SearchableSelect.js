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

    console.log(
      'downshiftState',
      downshiftState,
      downshiftState.getInputProps(),
    );

    // if (changes.hasOwnProperty('isOpen') && !changes.isOpen) {
    //   const el = document.querySelector(
    //     `[aria-labelledby=${
    //       downshiftState.getInputProps()['aria-labelledby']
    //     }] input`,``
    //   );
    //   console.log('EL: ', el);
    //   el.blur();
    // }

    console.log('changes', changes);

    if (
      changes.hasOwnProperty('isOpen') &&
      changes.isOpen &&
      !changes.inputValue
    ) {
      this.setState({
        inputValue: changes.selectedItem || '',
        filteredOptions: options,
      });
    }

    // if (changes.hasOwnProperty('inputValue')) {
    //   this.setState({
    //     inputValue: changes.inputValue,
    //     filteredOptions: filterOptions(options, changes.inputValue, this.props),
    //   });
    // }

    onStateChange && onStateChange(changes, downshiftState);
  };

  handleInputValueChange = inputValue => {
    const { filterOptions, options } = this.props;
    console.log('INPUT VALUE: ', inputValue);
    this.setState({
      inputValue: inputValue,
      filteredOptions: filterOptions(options, inputValue, this.props),
    });
  };

  render() {
    const { options, onStateChange, CurrentValue, ...rest } = this.props;

    console.log('STATE: ', this.state);

    return (
      <Select
        {...rest}
        CurrentValue={CurrentValue}
        onStateChange={this.handleSelectStateChange}
        onInputValueChange={this.handleInputValueChange}
        options={this.state.filteredOptions}
        inputValue={this.state.inputValue}
      />
    );
  }
}
