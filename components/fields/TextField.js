import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../inputs/TextInput';
import FieldWrapper from './FieldWrapper';

class TextField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onChange: PropTypes.func,
    }).isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    helpText: PropTypes.string,
    callout: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    type: 'text',
    helpText: null,
    callout: null,
  };

  render() {
    const { input, label, id, disabled, required, helpText, type, callout } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        disabled={disabled}
        required={required}
        callout={callout}
      >
        <TextInput {...input} id={id} type={type} disabled={disabled} required={required} />
      </FieldWrapper>
    );
  }
}

TextField.usage = `
# TextField

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
* \`callout\`: optional flyout to show on hover
`;

export default TextField;
