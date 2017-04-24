import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BinaryInput from './BinaryInput';

const HiddenInput = styled.input`
  margin: -9999px;

  &:focus + label::before {
    box-shadow: ${({ theme }) => theme.toggle.focusShadow};
  }
`;

const Track = styled.label`
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.toggle.padding};
  margin: ${({ theme }) => theme.toggle.margin};
  float: left;
  user-select: none;
  transition: all 0.2s ease;
  line-height: ${({ theme }) => theme.toggle.height};
  font-family: ${({ theme }) => theme.toggle.fontFamily};
  font-weight: ${({ theme }) => theme.toggle.fontWeight};

  &::before {
    content: '';
    background: ${({ theme, active }) => active ? theme.toggle.activeBG : theme.toggle.bg};
    border: ${({ theme }) => theme.toggle.border};
    border-radius: 2em;
    width: ${({ theme }) => theme.toggle.width};
    height: ${({ theme }) => theme.toggle.height};
    cursor: pointer;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  &::after {
    content: '';
    background: ${({ theme, active }) => active ? theme.toggle.activeFG : theme.toggle.fg};
    border: ${({ theme }) => theme.toggle.border};
    border-radius: 2em;
    width: ${({ theme }) => theme.toggle.height};
    height: ${({ theme }) => theme.toggle.height};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ active }) => active ? '1.7em' : 0};
    display: block;
    transition: all 0.2s ease;
  }

  &:hover::before,
  &:hover::after {
    border: ${({ theme }) => theme.toggle.hoverBorder};
  }
  &:hover::before {
    background: ${({ theme, active }) => active ? theme.toggle.hoverBG : theme.toggle.bg};
  }

  &:disabled::before, &:disabled::after {
    border: ${({ theme }) => theme.toggle.disabledBorder};
    background: ${({ theme }) => theme.toggle.disabledBG};
  }
`;

class Toggle extends React.Component {
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
      <BinaryInput {...this.props} Input={HiddenInput} Label={Track} />
    );
  }
}

Toggle.usage = `
# Toggle

See BinaryInput
`;

export default Toggle;