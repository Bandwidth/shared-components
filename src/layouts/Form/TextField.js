import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/Input';
import FieldWrapper from './FieldWrapper';

class TextField extends React.Component {
  static propTypes = {
    /**
     * A collection of input props. Passed to input.
     */
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onChange: PropTypes.func,
    }).isRequired,
    /**
     * Indicates whether the user can change this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Contents of a label above the field.
     */
    label: PropTypes.string,
    /**
     * Adds an id to the input.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the input.
     */
    className: PropTypes.string,
    /**
     * Indicates the type of text this field accepts.
     */
    type: PropTypes.string,
    /**
     * Contents of help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Optional callout contents when a user hovers the field.
     */
    callout: PropTypes.node,
    /**
     * Placeholder text to render inside the input.
     */
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    className: null,
    type: 'text',
    helpText: null,
    callout: null,
    placeholder: null,
  };

  render() {
    const { input, label, id, className, disabled, required, helpText, type, callout, placeholder } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        disabled={disabled}
        required={required}
        callout={callout}
      >
        <TextInput
          {...input}
          id={id}
          className={className}
          type={type}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
        />
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
