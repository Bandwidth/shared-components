import React from 'react';
import Button from './Button';
import InputWrapper from './InputWrapper';

export default class ButtonInput extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
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
    const { content, onClick, label, id, disabled, helpText, type } = this.props;
    return (
      <InputWrapper label={label} helpText={helpText}>
        <Button onClick={onClick} id={id} type={type} disabled={disabled} useMargin={false}>{content}</Button>
      </InputWrapper>
    );
  }
}