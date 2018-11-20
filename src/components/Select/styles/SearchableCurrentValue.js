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
    },
    ref,
  ) => {
    if (loading) {
      return <LoadingState required={required} invalid={invalid} />;
    }

    return (
      <Input
        {...getInputProps({
          inputRef: ref,
          appearFocused: isOpen,
          placeholder,
          disabled: disabled || loading,
          required,
          invalid,
          onFocus: openMenu,
          value: inputValue,
        })}
        inlineContent={
          <Controls>
            {!!inputValue &&
              !disabled &&
              !required && <ClearButton onClick={clearSelection} />}
            <Arrow
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
