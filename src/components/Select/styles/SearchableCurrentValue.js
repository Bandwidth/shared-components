import React, { forwardRef } from 'react';
import DefaultInput from 'components/Input';
import DefaultLoadingState from './LoadingState';
import DefaultControls from './Controls';
import DefaultArrow from './Arrow';
import DefaultClearButton from './ClearButton';

const Searchable = forwardRef(
  (
    {
      isOpen,
      clearSelection,
      getInputProps,
      inputValue,
      getToggleButtonProps,
      placeholder,
      setState,
      openMenu,
      disabled,
      required,
      loading,
      invalid,
      Input,
      Controls,
      Arrow,
      ClearButton,
      LoadingState,
      inputProps,
      ...rest
    },
    ref,
  ) => {
    if (loading) {
      return <LoadingState required={required} invalid={invalid} />;
    }

    return (
      <Input
        visited={false}
        {...getInputProps({
          placeholder,
          required,
          invalid,
          ...inputProps,
          appearFocused: isOpen,
          inputRef: ref,
          disabled: disabled || loading,
          onFocus: openMenu,
          onClick: openMenu,
          value: inputValue,
        })}
        {...rest}
        inlineContent={
          <Controls disabled={disabled}>
            {!!inputValue && !disabled && !required && (
              <ClearButton onClick={clearSelection} />
            )}
            <Arrow
              disabled={disabled}
              {...getToggleButtonProps({
                expanded: isOpen,
                onClick: () => setState({ inputValue: '' }),
              })}
            />
          </Controls>
        }
      />
    );
  },
);

Searchable.defaultProps = {
  Input: DefaultInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

Searchable.styles = {
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

export default Searchable;
