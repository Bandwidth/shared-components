import React, { forwardRef } from 'react';
import { Input, Loader } from 'components';
import { Controls, Arrow, ClearButton } from './';
import styled from 'styled-components';
import { themeGet } from 'extensions';

const FakeInput = props => <Input as="button" {...props} />;
const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 53px;

  & > *:not(:first-child) {
    position: absolute;
    right: ${themeGet('spacing.medium')};
    top: 30%;
    z-index: 10;
  }

  & > *:first-child {
    padding-right: ${themeGet('spacing.extraLarge')};
    height: 100%;
  }
`;
const OverlayLoading = styled(Loader)`
  position: absolute;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%);
`;

export default forwardRef(
  (
    {
      isOpen,
      clearSelection,
      getToggleButtonProps,
      inputValue,
      placeholder,
      disabled,
      loading,
      required,
      invalid,
    },
    ref,
  ) => (
    <Wrapper {...(disabled || loading ? {} : getToggleButtonProps({ ref }))}>
      <FakeInput
        appearFocused={isOpen}
        disabled={disabled}
        required={required}
        invalid={invalid}
      >
        {loading ? <OverlayLoading /> : inputValue || placeholder}
      </FakeInput>
      <Controls>
        {!!inputValue && !required && <ClearButton onClick={clearSelection} />}
        <Arrow expanded={isOpen} />
      </Controls>
    </Wrapper>
  ),
);
