import React from 'react';
import InputBox from './InputBox';
import TextBox from './TextBox';
import InputWrapper from './InputWrapper';

class TextInput extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      onChange: React.PropTypes.func,
    }).isRequired,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    type: React.PropTypes.string,
    helpText: React.PropTypes.string,
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
    const { input, label, id, disabled, required, helpText, type } = this.props;
    return (
      <InputWrapper label={label} helpText={helpText} disabled={disabled} required={required}>
        <TextBox input={input} id={id} type={type} disabled={disabled} required={required} />
      </InputWrapper>
    );
  }
}

TextInput.usage = `
# TextInput

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
`;

export default TextInput;