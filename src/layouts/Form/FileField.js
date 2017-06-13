import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';
import FileInput from '../../components/FileLoader';

class FileField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.instanceOf(FileList),
    }).isRequired,

    label: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    callout: PropTypes.node,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    required: false,
    disabled: false,
    callout: null,
  };

  render() {
    const { label, helpText, required, disabled, input, callout } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        required={required}
        disabled={disabled}
        callout={callout}
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
