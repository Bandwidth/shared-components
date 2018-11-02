import React, { forwardRef } from 'react';
import DefaultInput from 'components/Input';
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
      invalid,
      Input,
      Controls,
      Arrow,
      ClearButton,
    },
    ref,
  ) => (
    <Input
      {...getInputProps({
        inputRef: ref,
        appearFocused: isOpen,
        placeholder,
        disabled,
        required,
        invalid,
        onFocus: openMenu,
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
  ),
);

Searchable.defaultProps = {
  Input: DefaultInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
};

Searchable.styles = {
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
};

export default Searchable;
