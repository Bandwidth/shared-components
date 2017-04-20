import React from 'react';
import styled from 'styled-components';
import generateId from '../../extensions/generateId';

const Container = styled.div`
  line-height: 1.5em;
  padding-top: 0.4em;
`;

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

export default class Toggle extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.bool,
      onChange: React.PropTypes.func,
      disabled: React.PropTypes.bool,
    }),
    label: React.PropTypes.string,
    id: React.PropTypes.string,
  };

  static defaultProps = {
    input: {
      value: false,
    },
    label: null,
    id: null,
  };

  handleClick = () => {
    this.props.input.onChange(!this.props.input.value);
  };

  render() {
    const { label, input: { value, disabled } } = this.props;
    let id = this.props.id;

    if (!id) {
      /*
        because this generation happens at render time,
        the id is not reliable. developers should specify an id through
        props if they want a reliable id.
      */
      id = generateId('toggle');
    }

    return (
      <Container>
        <HiddenInput id={id} type="checkbox" value={value} disabled={disabled} onClick={this.handleClick} />
        <Track htmlFor={id} active={value}>
          {label}
        </Track>
      </Container>
    );
  }
}
