import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';
import FileInput from '../../components/FileLoader';

class FileField extends React.Component {
  static propTypes = {
    /**
     * A collection of input properties. Passed to input.
     */
    input: PropTypes.shape({
      value: PropTypes.instanceOf(FileList),
    }).isRequired,
    /**
     * Content of the label above the field.
     */
    label: PropTypes.string,
    /**
     * Content of the help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Indicates that this field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Indicates whether the user can change this field.
     */
    disabled: PropTypes.bool,
    /**
     * Adds a callout when the user hovers the field.
     */
    callout: PropTypes.node,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    required: false,
    disabled: false,
    callout: null,
    id: null,
    className: null,
  };

  render() {
    const { label, helpText, required, disabled, input, callout, id, className } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        required={required}
        disabled={disabled}
        callout={callout}
      >
       <FileInput {...input} id={id} className={className} />
      </FieldWrapper>
    );
  }
}

FileField.usage = `
# FileField

A file input component (meant to be used with Redux Form) which accepts drag-and-drop.
`;

export default FileField;
