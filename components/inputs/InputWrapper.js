import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import HelpText from './HelpText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => theme.textInput.margin};

  &:last-child {
    margin-right: 0;
  }
`;

export default class InputWrapper extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    helpText: React.PropTypes.string,

    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    type: 'text',
    helpText: null,
  };

  render() {
    const { label, disabled, helpText, children } = this.props;
    return (
      <Container>
        {label ? <Label>{label}</Label> : null}
        {children}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
      </Container>
    );
  }
}