import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Loader from 'components/Loader';
import styled from 'styled-components';

/**
 * `Button.Submit` is intended to be used within a form. `Button.Submit` should only be used to represent a button
 * that triggers the `onSubmit` actions (do not use for standard actions or cancellation).
 * @visibleName Button.Submit
 */
class SubmitButton extends React.Component {
  static propTypes = {
    /**
     * Indicates that the form has not been touched yet. Will disable submission.
     */
    pristine: PropTypes.bool,
    /**
     * Indicates that the form is loading something. Will disable submission.
     */
    loading: PropTypes.bool,
    /**
     * Indicates that the user cannot submit the form.
     */
    disabled: PropTypes.bool,
    /**
     * Glyph name for an icon to pop out of the right side of the button on hover.
     */
    rightIcon: PropTypes.string,
    /**
     * Glyph name for an icon to pop out of the left side of the butotn on hover.
     */
    leftIcon: PropTypes.string,
    /**
     * Contents of the button.
     */
    children: PropTypes.node.isRequired,
    /**
     * Alternate optional contents of the button when 'pristine' is true.
     */
    pristineContents: PropTypes.node,
    /**
     * Adds an id to the button.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the button.
     */
    className: PropTypes.string,
    /**
     * Adds a click handler to the button
     */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    pristine: false,
    loading: false,
    disabled: false,
    rightIcon: null,
    leftIcon: null,
    pristineContents: 'Up to Date',
    id: null,
    className: null,
    onClick: () => null,
  };

  renderContents = () => {
    const { pristine, loading, children, pristineContents } = this.props;

    if (pristine) {
      return <span>{pristineContents}</span>;
    }
    if (loading) {
      return <Loader size="14px" />;
    }

    return children;
  };

  render() {
    const { pristine, loading, disabled, ...rest } = this.props;
    return (
      <Button
        disabled={pristine || loading || disabled}
        type="submit"
        {...rest}
      >
        {this.renderContents()}
      </Button>
    );
  }
}

export default styled(SubmitButton)`
  min-height: 40px;
`;
