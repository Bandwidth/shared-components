import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../inputs/TextArea';
import FieldWrapper from './FieldWrapper';

class TextAreaField extends React.Component {
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
      <FieldWrapper label={label} helpText={helpText} disabled={disabled} required={required}>
        <TextArea {...input} id={id} disabled={disabled} required={required} />
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

\`\`\`
<TextAreaField input={input} label="big text" helpText="write a lot here" required />
\`\`\`
`;

export default TextAreaField;
