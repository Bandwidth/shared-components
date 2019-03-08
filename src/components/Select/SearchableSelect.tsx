import * as React from 'react';
import Select, { SelectProps } from './Select';
import * as styles from './styles';
import { DownshiftState } from 'downshift';

const defaultFilterOptions = (options: any[], inputValue, props) =>
  options.filter(option =>
    (props.renderOption(option) || '')
      .toLowerCase()
      .includes((inputValue || '').toLowerCase()),
  );

export interface SearchableSelectProps extends SelectProps {
  /**
   * A filtering function which takes the options list, the
   * current input value, and all props.
   * Should return a reduced list of options.
   */
  filterOptions?: (options: any[], inputValue, props) => any[];
  onStateChange?: (changes, downshiftState: DownshiftState<any>) => void;
}

interface SearchableSelectState {
  filteredOptions: any[];
  inputValue: string;
}

export default class SearchableSelect extends React.Component<
  SearchableSelectProps,
  SearchableSelectState
> {
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

  handleSelectStateChange = (changes, downshiftState: DownshiftState<any>) => {
    const { options, onStateChange } = this.props;

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

    onStateChange && onStateChange(changes, downshiftState);
  };

  handleInputValueChange = (inputValue, downshiftState) => {
    const { filterOptions, options } = this.props;
    this.setState({
      inputValue: inputValue,
      filteredOptions: filterOptions
        ? filterOptions(options, inputValue, this.props)
        : options,
    });
  };

  render() {
    const { options, onStateChange, CurrentValue, ...rest } = this.props;

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
