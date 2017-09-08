import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
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

export class FileLoader extends React.Component {
  static propTypes = {
    /**
     * A FileList object to use as the value of the input.
     */
    value: PropTypes.instanceOf(FileList).isRequired,
    /**
     * Handler for the onChange event on the input.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Marks that this input is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Marks that the user cannot change this input.
     */
    disabled: PropTypes.bool,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    required: false,
    disabled: false,
    className: null,
    id: null,
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
    const { onChange, value, required, disabled, className, id } = this.props;

    return (
      <Dropzone
        multiple={false}
        onDrop={(files) => onChange(files)}
        style={{ width: '100%' }}
        activeStyle={{ color: '#00bcec' }}
        rejectStyle={{}}
        value={value}
        required={required}
        disabled={disabled}
        className={className}
        id={id}
      >
        {this.renderFiles()}
      </Dropzone>
    );
  }
}

export default sharedComponent({ DropArea })(FileLoader);
