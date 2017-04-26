import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import InputWrapper from './InputWrapper';
import Icon from '../Icon';

const DropArea = styled.div`
  border: ${({ theme }) => theme.input.border};
  padding: ${({ theme }) => theme.input.padding};
  font-size: ${({ theme }) => theme.input.fontSize};
  font-family: ${({ theme }) => theme.input.fontFamily};
  line-height: ${({ theme }) => theme.input.lineHeight};
  background: ${({ theme }) => theme.input.bg};
  color: ${({ theme }) => theme.input.fg};
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Preview = styled.div`
  margin: auto auto auto 16px;
`;

class FileDropInput extends React.Component {
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

  renderFiles = () => {
    const { input } = this.props;
    if (input.value && input.value[0]) {
      return (
        <DropArea>
          <Icon name="fileFilled" />
          <Preview active={true}>{input.value[0].name}</Preview>
        </DropArea>
      );
    } else {
      return (
        <DropArea>
          <Icon name="file" />
          <Preview>Drop a file here, or click to browse.</Preview>
        </DropArea>
      );
    }
  }

  render() {
    const { label, helpText, required, disabled, input } = this.props;
    return (
      <InputWrapper
        label={label}
        helpText={helpText}
        required={required}
        disabled={disabled}
      >
        <Dropzone
          {...input}
          multiple={false}
          onDrop={(files) => input.onChange(files)}
          style={{ width: '100%' }}
          activeStyle={{ color: '#00bcec' }}
          rejectStyle={{}}
        >
          {this.renderFiles()}
        </Dropzone>
      </InputWrapper>
    );
  }
}

FileDropInput.usage = `
# FileDropInput

A file input component (meant to be used with Redux Form) which accepts drag-and-drop.
`;

export default FileDropInput;