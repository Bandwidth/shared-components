import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import selectOptionPrimaryValue from 'extensions/selectItemPrimaryValue';
import {
  OptionsList,
  Option,
  Arrow,
  ClearButton,
  Controls,
  Searchable,
  Unsearchable,
} from './styles';
import Downshift from 'downshift';
import { Input, Loader } from 'components';
import { Manager, Reference, Popper } from 'react-popper';
import { popperMatchWidthModifier } from 'extensions';
import { Foreground } from 'behaviors';

class Select extends React.PureComponent {
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
     * Styles this field as being invalid
     */
    invalid: PropTypes.bool,
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
     * The text to use when no option is selected. If this value is not provided, the text will default to placeholder
     */
    noneText: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    allowNone: false,
    invalid: false,
    placeholder: 'Select one',
    renderOption: selectOptionPrimaryValue,
    getOptionValue: selectOptionPrimaryValue,
    searchable: false,
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

  render() {
    const {
      required,
      placeholder,
      noneText,
      allowNone,
      isLoading,
      loading,
      invalid,
      value,
      renderOption,
      options,
      getOptionValue,
      searchable,
      disabled,
      onChange,
      ...rest
    } = this.props;
    const combinedLoading = loading || isLoading;
    const combinedPlaceholder = noneText !== undefined ? noneText : placeholder;
    const filterOptions = (options, inputValue) => {
      if (!searchable) {
        return options;
      }
      return options.filter(option =>
        (renderOption(option) || '')
          .toLowerCase()
          .includes((inputValue || '').toLowerCase()),
      );
    };

    return (
      <Downshift onChange={onChange} itemToString={renderOption}>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          clearSelection,
        }) => (
          <div>
            <Manager>
              <Reference>
                {({ ref }) =>
                  searchable ? (
                    <Searchable
                      getInputProps={getInputProps}
                      getToggleButtonProps={getToggleButtonProps}
                      inputValue={inputValue}
                      clearSelection={clearSelection}
                      isOpen={isOpen}
                      ref={ref}
                      placeholder={combinedPlaceholder}
                      disabled={disabled}
                      loading={combinedLoading}
                      invalid={invalid}
                      required={required}
                    />
                  ) : (
                    <Unsearchable
                      getInputProps={getInputProps}
                      getToggleButtonProps={getToggleButtonProps}
                      inputValue={inputValue}
                      clearSelection={clearSelection}
                      isOpen={isOpen}
                      ref={ref}
                      placeholder={combinedPlaceholder}
                      disabled={disabled}
                      loading={combinedLoading}
                      invalid={invalid}
                      required={required}
                    />
                  )
                }
              </Reference>
              {isOpen && (
                <Popper
                  placement="bottom"
                  modifiers={{
                    matchWidth: popperMatchWidthModifier,
                    flip: {
                      behavior: 'flip',
                      padding: 20,
                    },
                  }}
                >
                  {({ ref, style, placement }) => {
                    const filteredOptions = filterOptions(options, inputValue);

                    if (!filteredOptions.length) {
                      return <div ref={ref} style={style} />; // TODO: empty state
                    }

                    return (
                      <Foreground>
                        <OptionsList
                          data-placement={placement}
                          {...getMenuProps({ ref, style })}
                        >
                          {filteredOptions.map((option, index) => (
                            <Option
                              {...getItemProps({
                                key: getOptionValue(option),
                                index,
                                item: option,
                                highlighted: highlightedIndex === index,
                              })}
                            >
                              {renderOption(option)}
                            </Option>
                          ))}
                        </OptionsList>
                      </Foreground>
                    );
                  }}
                </Popper>
              )}
            </Manager>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;
