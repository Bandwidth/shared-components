import React, { forwardRef } from 'react';
import Input from 'components/Input';
import Loader from 'components/Loader';
import DefaultControls from './Controls';
import DefaultArrow from './Arrow';
import DefaultClearButton from './ClearButton';
import DefaultLoadingState from './LoadingState';
import styled from 'styled-components';
import { themeGet } from 'extensions';

const DefaultFakeInput = props => <Input as="button" {...props} />;
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
      FakeInput,
      OverlayLoading,
      Controls,
      ClearButton,
      Arrow,
      LoadingState,
    },
    ref,
  ) => {
    if (loading) {
      return <LoadingState required={required} invalid={invalid} />;
    }

    return (
      <Wrapper {...(disabled || loading ? {} : getToggleButtonProps({ ref }))}>
        <FakeInput
          appearFocused={isOpen}
          disabled={disabled}
          required={required}
          invalid={invalid}
        >
          {inputValue || placeholder}
        </FakeInput>
        <Controls>
          {!!inputValue &&
            !disabled &&
            !required && <ClearButton onClick={clearSelection} />}
          <Arrow expanded={isOpen} />
        </Controls>
      </Wrapper>
    );
  },
);

Unsearchable.defaultProps = {
  Wrapper: DefaultWrapper,
  FakeInput: DefaultFakeInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

Unsearchable.styles = {
  Wrapper: DefaultWrapper,
  FakeInput: DefaultFakeInput,
  Controls: DefaultControls,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
  LoadingState: DefaultLoadingState,
};

export default Unsearchable;
