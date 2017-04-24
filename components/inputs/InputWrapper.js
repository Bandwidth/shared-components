import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import HelpText from './HelpText';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => theme.input.margin};

  &:last-child {
    margin-right: 0;
  }
`;

class InputWrapper extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
    label: React.PropTypes.string,
    helpText: React.PropTypes.string,

    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    type: 'text',
    helpText: null,
  };

  render() {
    const { label, disabled, required, helpText, children } = this.props;
    return (
      <Container>
        {label ? <Label required={required}>{label}</Label> : null}
        {children}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
      </Container>
    );
  }
}

InputWrapper.usage = `
# InputWrapper

Mainly used by other input classes. It adds the label and help text above and below its children.

\`\`\`
<InputWrapper label="foo" helpText="bar">
  <TextBox />
</InputWrapper>
\`\`\`
`;

export default InputWrapper;