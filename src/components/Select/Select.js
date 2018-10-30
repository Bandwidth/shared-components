import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import selectOptionPrimaryValue from 'extensions/selectItemPrimaryValue';
import * as styles from './styles';
import Downshift from 'downshift';
import { Input, Loader } from 'components';
import { Manager, Reference, Popper } from 'react-popper';
import { popperMatchWidthModifier } from 'extensions';
import { Foreground } from 'behaviors';

class Select extends React.PureComponent {
  static propTypes = {
    /**
     * The name to apply to the input field
     */
    name: PropTypes.string,
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
     * The text to use when no option is selected. If this value is not provided, the text will default to placeholder
     */
    noneText: PropTypes.string,
    /**
     * Renders the select in "searchable" form. Use to override behavior.
     */
    Searchable: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Renders the select in "unsearchable" form. Use to override behavior.
     */
    Unsearchable: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Renders an option. Use to override behavior.
     */
    Option: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Renders the list of options. Use to override behavior.
     */
    OptionsList: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
    Searchable: styles.Searchable,
    Unsearchable: styles.Unsearchable,
    Option: styles.Option,
    OptionsList: styles.OptionsList,
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
      Searchable,
      Unsearchable,
      Option,
      OptionsList,
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
