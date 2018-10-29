import React, { forwardRef } from 'react';
import { Input } from 'components';
import { Controls, Arrow, ClearButton } from './';

export default forwardRef(
  (
    {
      isOpen,
      clearSelection,
      getInputProps,
      inputValue,
      getToggleButtonProps,
      placeholder,
      disabled,
      required,
      invalid,
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
      })}
      inlineContent={
        <Controls>
          {!!inputValue &&
            !required && <ClearButton onClick={clearSelection} />}
          <Arrow {...getToggleButtonProps({ expanded: isOpen })} />
        </Controls>
      }
    />
  ),
);
