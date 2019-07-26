import React, { forwardRef, useCallback } from 'react';
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
      inputRef,
      ...rest
    },
    ref,
  ) => {
    if (loading) {
      return <LoadingState required={required} invalid={invalid} />;
    }

    // in the generally confusing landscape of our various implementations of Select,
    // we somehow have ended up with two refs that need to point to the same element.
    // The main ref for this component is for the Popper, but inputRef is for the
    // user to utilize how they see fit.
    const composedRefs = useCallback(
      el => {
        ref && ref(el);
        inputRef && inputRef(el);
      },
      [ref, inputRef],
    );

    return (
      <Input
        visited={false}
        {...getInputProps({
          placeholder,
          required,
          invalid,
          ...inputProps,
          appearFocused: isOpen,
          inputRef: composedRefs,
          disabled: disabled || loading,
          onFocus: openMenu,
          onClick: openMenu,
          value: inputValue,
        })}
        autoComplete="off"
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
