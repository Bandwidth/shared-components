import React, { forwardRef } from 'react';
import Input from 'components/Input';
import Loader from 'components/Loader';
import DefaultControls from './Controls';
import DefaultArrow from './Arrow';
import DefaultClearButton from './ClearButton';
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
const DefaultOverlayLoading = styled(Loader)`
  position: absolute;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%);
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
        {!!inputValue &&
          !disabled &&
          !required && <ClearButton onClick={clearSelection} />}
        <Arrow expanded={isOpen} />
      </Controls>
    </Wrapper>
  ),
);

Unsearchable.defaultProps = {
  Wrapper: DefaultWrapper,
  FakeInput: DefaultFakeInput,
  Controls: DefaultControls,
  OverlayLoading: DefaultOverlayLoading,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
};

Unsearchable.styles = {
  Wrapper: DefaultWrapper,
  FakeInput: DefaultFakeInput,
  Controls: DefaultControls,
  OverlayLoading: DefaultOverlayLoading,
  Arrow: DefaultArrow,
  ClearButton: DefaultClearButton,
};

export default Unsearchable;
