import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
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

class FileLoader extends React.Component {
  static propTypes = {
    value: PropTypes.instanceOf(FileList).isRequired,
    onChange: PropTypes.func.isRequired,

    required: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    required: false,
    disabled: false,
  };

  renderFiles = () => {
    const { value } = this.props;
    if (value && value[0]) {
      return (
        <DropArea>
          <Icon name="fileFilled" />
          <Preview active={true}>{value[0].name}</Preview>
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
    const { onChange } = this.props;

    return (
      <Dropzone
        {...this.props}
        multiple={false}
        onDrop={(files) => onChange(files)}
        style={{ width: '100%' }}
        activeStyle={{ color: '#00bcec' }}
        rejectStyle={{}}
      >
        {this.renderFiles()}
      </Dropzone>
    );
  }
}

FileLoader.usage = `
A file input component which accepts drag-and-drop.
`;

export default FileLoader;
