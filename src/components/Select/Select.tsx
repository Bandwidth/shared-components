import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import Downshift, { DownshiftProps } from 'downshift';
import { Manager, Reference, Popper, PopperProps } from 'react-popper';
import popperMatchWidthModifier from './popperMatchWidthModifier';
import { Foreground } from 'behaviors';
import isString from 'lodash.isstring';
import isPlainObject from 'lodash.isplainobject';
import { Omit } from 'recompose';

const defaultRenderOption = option => {
  if (!option) {
    return '';
  }

  if (isString(option)) {
    return option;
  }

  if (isPlainObject(option)) {
    return option.label || option.name || option.id || JSON.stringify(option);
  }

  return JSON.stringify(option);
};

export interface SelectProps
  extends Omit<
    DownshiftProps<any>,
    'children' | 'selectedItem' | 'itemCount' | 'itemToString'
  > {
  /**
   * The name to apply to the input field
   */
  name?: string;
  /**
   * Text or node to show if none is selected
   */
  placeholder?: React.ReactNode;
  /**
   * Adds a class name to the element.
   */
  className?: string;
  /**
   * Adds an id to the element.
   */
  id?: string;
  /**
   * Text or node to show if none is selected
   */
  noneText?: React.ReactNode;
  /**
   * Indicates whether the user can interact with this field.
   */
  disabled?: boolean;
  /**
   * Indicates whether this field is required for form submission. Non-required fields allow none.
   */
  required?: boolean;
  /**
   * Styles this field as being invalid
   */
  invalid?: boolean;
  /**
   * A list of selection options. Can be complex objects.
   */
  options: any[];
  /**
   * A function which takes an option and renders text for the select. Has
   * a sane default.
   */
  renderOption: (item: any) => string;
  /**
   * The currently selected value.
   */
  value: any;
  /**
   * Handler for change events on the select. It will be called with the exact
   * option you passed in via options
   */
  onChange?: () => void;
  /**
   * Alias for isLoading
   */
  loading?: boolean;
  /**
   * Any additional props you want to pass to the underlying Popper instance
   */
  popperProps?: PopperProps;
  /**
   * Renders the visible input and controls which show
   * the currently selected value and allow interaction.
   * Use to override behavior. Reference the library's default implementation
   * code for details about how to implement your custom version.
   */
  CurrentValue?: any;
  /**
   * Renders the options list. Reference the library's default implementation
   * code for details about how to implement your own custom version
   */
  Options?: any;
}

class Select extends React.PureComponent<SelectProps> {
  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    allowNone: false,
    invalid: false,
    placeholder: 'Select one',
    renderOption: defaultRenderOption,
    defaultHighlightedIndex: 0,
    CurrentValue: styles.CurrentValue,
    Options: styles.Options,
  };

  static styles = styles;

  scheduleUpdate: () => void;

  componentDidUpdate = prevProps => {
    // Force popper to update if the options were filtered, since it can change its positioning.
    if (prevProps.options !== this.props.options && this.scheduleUpdate) {
      this.scheduleUpdate();
    }
  };

  render() {
    const {
      required,
      placeholder,
      noneText,
      loading,
      invalid,
      value,
      renderOption,
      options,
      disabled,
      onChange,
      CurrentValue,
      Options,
      id,
      className,
      popperProps,
      name,
      ...rest
    } = this.props;
    const combinedPlaceholder = noneText !== undefined ? noneText : placeholder;

    return (
      <Downshift
        onChange={onChange}
        itemCount={options.length}
        itemToString={renderOption}
        selectedItem={value}
        {...rest}
      >
        {downshiftProps => (
          <div>
            <Manager>
              <Reference>
                {({ ref }) => (
                  <CurrentValue
                    {...downshiftProps}
                    ref={ref}
                    placeholder={combinedPlaceholder}
                    disabled={disabled}
                    loading={loading}
                    invalid={invalid}
                    required={required}
                    id={id}
                    className={className}
                    name={name}
                  />
                )}
              </Reference>
              {downshiftProps.isOpen && (
                <Popper
                  placement="bottom"
                  modifiers={{
                    matchWidth: popperMatchWidthModifier,
                    flip: { behavior: 'flip', padding: 20 },
                    preventOverflow: { escapeWithReference: true, padding: 0 },
                  }}
                  {...popperProps}
                >
                  {popperStuff => {
                    this.scheduleUpdate = popperStuff.scheduleUpdate;
                    return (
                      <Foreground>
                        <Options
                          {...popperStuff}
                          {...downshiftProps}
                          renderOption={renderOption}
                          options={options}
                        />
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
