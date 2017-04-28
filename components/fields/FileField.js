import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';
import FileInput from '../inputs/FileInput';

class FileField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.instanceOf(FileList),
    }).isRequired,

    label: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    required: false,
    disabled: false,
  };

  render() {
    const { label, helpText, required, disabled, input } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        required={required}
        disabled={disabled}
      >
       <FileInput {...input} />
      </FieldWrapper>
    );
  }
}

FileField.usage = `
# FileField

A file input component (meant to be used with Redux Form) which accepts drag-and-drop.
`;

export default FileField;