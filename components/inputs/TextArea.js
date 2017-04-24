import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';

const Area = styled.textarea`
  background: ${({ theme }) => theme.textarea.bg};
  color: ${({ theme }) => theme.textarea.fg};
  border: ${({ theme }) => theme.textarea.border};
  font-size: ${({ theme }) => theme.textarea.fontSize};
  font-weight: ${({ theme }) => theme.textarea.fontWeight};
  font-family: ${({ theme }) => theme.textarea.fontFamily};
  padding: ${({ theme }) => theme.textarea.padding};
  letter-spacing: 0.02em;
  box-shadow: none;
  transition: all 0.2s ease;
  line-height: ${({ theme }) => theme.textarea.lineHeight};
  outline: none;
  width: 100%;
  min-height: 100px;
`;

class TextArea extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func,
    }),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    helpText: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    helpText: null,
  };

  render() {
    const { input, label, id, disabled, required, helpText } = this.props;
    return (
      <InputWrapper label={label} helpText={helpText} disabled={disabled} required={required}>
        <Area {...input} id={id} disabled={disabled} required={required} />
      </InputWrapper>
    );
  }
}

TextArea.usage = `
# TextArea

An input component that renders a large field for entering long text.

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation

\`\`\`
<TextArea input={input} label="big text" helpText="write a lot here" required />
\`\`\`
`;

export default TextArea;