import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../../components/TextArea';
import FieldWrapper from './FieldWrapper';

/**
 * DEPRECATED
 *
 * @class TextAreaField
 * @extends {React.Component}
 */
class TextAreaField extends React.Component {
  static propTypes = {
    /**
     * A collection of input props. Passed to input.
     */
    input: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func,
    }),
    /**
     * Indicates whether a user can change this field.
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
     * Adds an id to the textarea.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the textarea.
     */
    className: PropTypes.string,
    /**
     * Contents of help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Optional callout contents to show when the user hovers the field.
     */
    callout: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    className: null,
    helpText: null,
    callout: null,
  };

  render() {
    const { input, label, id, className, disabled, required, helpText, callout } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        disabled={disabled}
        required={required}
        callout={callout}
      >
        <TextArea {...input} id={id} className={className} disabled={disabled} required={required} />
      </FieldWrapper>
    );
  }
}

TextAreaField.usage = `
# TextAreaField

An input component that renders a large field for entering long text.

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
* \`callout\`: optional flyout to show on hover

\`\`\`
<TextAreaField input={input} label="big text" helpText="write a lot here" required />
\`\`\`
`;

export default TextAreaField;
