import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Icon from 'components/Icon';
import Link from 'components/Link';
import FileLoaderDropArea from './styles/FileLoaderDropArea';
import FileLoaderPreview from './styles/FileLoaderPreview';

export default class FileLoader extends React.Component {
  static propTypes = {
    /**
     * Handler for the onChange event on the input.
     */
    onChange: PropTypes.func,
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
    /**
     * A component to render the drop area
     */
    DropArea: PropTypes.func,
    /**
     * A component to render the preview container
     */
    Preview: PropTypes.func,
  };

  static defaultProps = {
    required: false,
    disabled: false,
    className: null,
    id: null,
    DropArea: FileLoaderDropArea,
    Preview: FileLoaderPreview,
  };

  renderFiles = () => {
    const { value, DropArea, Preview } = this.props;
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
          <Preview>
            DROP A FILE HERE, OR&nbsp;
            <Link>CLICK TO BROWSE</Link>
          </Preview>
        </DropArea>
      );
    }
  };

  render() {
    const { onChange, value, required, disabled, className, id } = this.props;

    return (
      <Dropzone
        multiple={false}
        onDrop={files => onChange(files)}
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
