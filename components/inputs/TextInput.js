import React from 'react';
import InputBox from './InputBox';
import TextBox from './TextBox';
import InputWrapper from './InputWrapper';

export default class TextInput extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      onChange: React.PropTypes.func,
    }).isRequired,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    type: React.PropTypes.string,
    helpText: React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    type: 'text',
    helpText: null,
  };

  render() {
    const { input, label, id, disabled, helpText, type } = this.props;
    return (
      <InputWrapper label={label} helpText={helpText}>
        <TextBox input={input} id={id} type={type} disabled={disabled} />
      </InputWrapper>
    );
  }
}
