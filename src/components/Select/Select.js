import React from 'react';
import PropTypes from 'prop-types';
import LibSelect from 'react-select';
import arrowImage from './arrow.png';
import theme from '../../theme';
import _ from 'lodash';
import selectOptionPrimaryValue from '../../extensions/selectItemPrimaryValue';
import Loader from '../Loader';
import SelectWrapper from './styles/SelectWrapper';

class Select extends React.Component {
  static propTypes = {
    /**
     * Whether to blur the component upon selection
     */
    autoBlur: PropTypes.bool,
    /**
     * Whether to focus the component on mount
     */
    autoFocus: PropTypes.bool,
    /**
     * Whether to close the menu when a value is selected
     */
    closeOnSelect: PropTypes.bool,
    /**
     * Whether pressing backspace will clear a value.
     */
    deleteRemoves: PropTypes.bool,
    /**
     * delimiter to use to join multiple values for the hidden field value
     */
    delimiter: PropTypes.string,
    /**
     * method to filter a single option (option, filterString)
     */
    filterOption: PropTypes.func,
    /**
     * boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
     */
    filterOptions: PropTypes.func,
    /**
     * whether to strip diacritics when filtering
     */
    ignoreAccents: PropTypes.bool,
    /**
     * whether to perform case-insensitive filtering
     */
    ignoreCase: PropTypes.bool,
    /**
     * custom attributes for the Input
     */
    inputProps: PropTypes.object,
    /**
     * controls whether the component renders in a loading state
     */
    isLoading: PropTypes.bool,
    /**
     * Enables multi-select mode
     */
    multi: PropTypes.bool,
    /**
     * The name to apply to the input field
     */
    name: PropTypes.string,
    /**
     * Handler for blur events on the input
     */
    onBlur: PropTypes.func,
    /**
     * Handler for closing the options list
     */
    onClose: PropTypes.func,
    /**
     * Handler for focus events on the input
     */
    onFocus: PropTypes.func,
    /**
     * Handles raw input change events
     */
    onInputChange: PropTypes.func,
    /**
     * Handles raw input key down events
     */
    onInputKeyDown: PropTypes.func,
    /**
     * Handler for opening the options list
     */
    onOpen: PropTypes.func,
    /**
     * Handler for when an option is selected (value, event) => {}
     */
    onValueClick: PropTypes.func,
    /**
     * Text or node to show if none is selected
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission. Non-required fields allow none.
     */
    required: PropTypes.bool,
    /**
     * A list of selection options. Can be complex objects.
     */
    options: PropTypes.array.isRequired,
    /**
     * A function which takes an option and renders text for the select. Has
     * a sane default.
     */
    renderOption: PropTypes.func,
    /**
     * A function which takes an option and computes a single string value to
     * represent it. Has a sane default.
     */
    getOptionValue: PropTypes.func,
    /**
     * The currently selected value.
     */
    value: PropTypes.any,
    /**
     * Handler for change events on the select. It will be called with the new value
     * computed from getOptionValue.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Whether to enable searching to filter to the desired item.
     */
    searchable: PropTypes.bool,
    /**
     * Alias for isLoading
     */
    loading: PropTypes.bool,
    /**
     * DEPRECATED: use getOptionValue
     */
    selectOptionValue: PropTypes.func,
    /**
     * DEPRECATED: use required to prevent None, or omit it to allow None
     */
    allowNone: PropTypes.bool,
    /**
     * DEPRECATED: use placeholder
     */
    noneText: PropTypes.string,
    /**
     * A component that wraps the library select component, letting you
     * change styles.
     */
    Wrapper: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    allowNone: false,
    placeholder: 'None',
    renderOption: selectOptionPrimaryValue,
    getOptionValue: selectOptionPrimaryValue,
    searchable: false,
    Wrapper: SelectWrapper,
  };

  /**
   * Takes the options provided and converts them into
   * react-select options using user-provided conversion
   * functions to generate a displayed label and a backing value
   *
   * @memberof Select
   */
  convertOptions = () => {
    const {
      options,
      renderOption,
      getOptionValue,
      selectOptionValue,
    } = this.props;

    return options.map(opt => ({
      label: renderOption(opt),
      value: (getOptionValue || selectOptionValue)(opt),
    }));
  };

  /**
   * Intercepts the change event and calls the onChange prop
   * with the value alone.
   *
   * @memberof Select
   */
  handleChange = newValue => {
    if (!newValue) {
      this.props.onChange(newValue);
    } else if (this.props.multi) {
      this.props.onChange(newValue.map(item => item.value));
    } else {
      this.props.onChange(newValue.value);
    }
  };

  render() {
    const {
      required,
      placeholder,
      noneText,
      allowNone,
      isLoading,
      loading,
      Wrapper,
    } = this.props;
    const combinedLoading = loading || isLoading;
    const combinedPlaceholder = placeholder || noneText;

    return (
      <Wrapper>
        <LibSelect
          {...this.props}
          options={this.convertOptions()}
          onChange={this.handleChange}
          clearable={!required || allowNone}
          placeholder={
            combinedLoading ? <Loader size="14px" /> : combinedPlaceholder
          }
          isLoading={combinedLoading}
        />
      </Wrapper>
    );
  }
}

export default Select;
