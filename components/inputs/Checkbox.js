import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import icons from '../helpers/icons';
import BinaryInput from './BinaryInput';

const HiddenInput = styled.input`
  margin-left: -9999px;
  display: inline;

  &:focus + label::after {
    box-shadow: ${({ theme }) => theme.checkbox.focusShadow};
  }
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.checkbox.labelPadding};
  user-select: none;
  float: left;
  font-size: ${({ theme }) => theme.checkbox.labelFontSize};

  &::before {
    content: ${({ active }) => active ? `"${icons('checkmark')}"` : '""'};
    color: ${({ theme }) => theme.checkbox.checkFG};
    font-family: 'Bandwidth';
    width: ${({ theme }) => theme.checkbox.size};
    height: ${({ theme }) => theme.checkbox.size};
    display: block;
    position: absolute;
    top: ${({ theme }) => `calc(${theme.checkbox.size} / 6)`};
    left: ${({ theme }) => `calc(${theme.checkbox.size} / 8)`};
    z-index: 1;
  }

  &::after {
    content: "";
    background: ${({ theme, active }) => active ? theme.checkbox.fullBG : theme.checkbox.emptyBG};
    border: ${({ theme }) => theme.checkbox.border};
    border-radius: ${({ theme }) => theme.checkbox.borderRadius};
    width: ${({ theme }) => theme.checkbox.size};
    height: ${({ theme }) => theme.checkbox.size};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  ${({ disabled, theme }) =>
    disabled ?
      css`
        opacity: ${theme.checkbox.disabledOpacity};
        &::before { opacity: ${theme.checkbox.disabledOpacity}; }
      ` :
      ''
  }
`;

export default class Checkbox extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    label: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
  };

  render() {
    return (
      <BinaryInput {...this.props} Input={HiddenInput} Label={Label} />
    );
  }
}