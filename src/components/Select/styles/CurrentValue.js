import React, { forwardRef } from 'react';
import DefaultInput from 'components/Input';
import DefaultControls from './Controls';
import DefaultArrow from './Arrow';
import DefaultClearButton from './ClearButton';
import DefaultLoadingState from './LoadingState';
import styled from 'styled-components';
import { themeGet } from 'extensions';

const DefaultWrapper = styled.div`
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

const StyledInput = styled(DefaultInput)`
  cursor: ${({ disabled }) => (disabled ? 'text' : 'pointer')};
`;

const Unsearchable = forwardRef(
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
      Wrapper,
      Input,
      Controls,
      ClearButton,
      Arrow,
      LoadingState,
      ...rest
    },
    ref,
  ) => {
    if (loading) {
      return <LoadingState required={required} invalid={invalid} />;
    }

    return (
      <Wrapper
        {...(disabled || loading
          ? {}
          : getToggleButtonProps({
              ref,
            }))}
      >
        <Input
          role="select"
          appearFocused={isOpen}
          disabled={disabled}
          required={required}
          invalid={invalid}
          placeholder={placeholder}
          value={inputValue}
          hideCursor
          {...rest}
        />
        <Controls disabled={disabled}>
          {!!inputValue &&
            !disabled &&
            !required && <ClearButton onClick={clearSelection} />}
          <Arrow disabled={disabled} expanded={isOpen} />
        </Controls>
      </Wrapper>
    );
  },
);

Unsearchable.defaultProps = {
  Wrapper: DefaultWrapper,
  Input: StyledInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

Unsearchable.styles = {
  Wrapper: DefaultWrapper,
  Input: StyledInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

export default Unsearchable;
