import * as React from 'react';
import Button, { ButtonProps } from './Button';
import Loader from 'components/Loader';

interface SubmitButtonProps extends ButtonProps {
  /**
   * Indicates that the form has not been touched yet. Will disable submission.
   */
  pristine: boolean;
  /**
   * Indicates that the form is loading something. Will disable submission.
   */
  loading: boolean;
  /**
   * Indicates that the user cannot submit the form.
   */
  disabled: boolean;
  /**
   * Glyph name for an icon to pop out of the right side of the button on hover.
   */
  rightIcon: string;
  /**
   * Glyph name for an icon to pop out of the left side of the butotn on hover.
   */
  leftIcon: string;
  /**
   * Contents of the button.
   */
  children: React.ReactNode;
  /**
   * Alternate optional contents of the button when 'pristine' is true.
   */
  pristineContents: React.ReactNode;
  /**
   * Adds an id to the button.
   */
  id: string;
  /**
   * Adds a class name to the button.
   */
  className: string;
  /**
   * Adds a click handler to the button
   */
  onClick: () => void;
}

/**
 * `Button.Submit` is intended to be used within a form. `Button.Submit` should only be used to represent a button
 * that triggers the `onSubmit` actions (do not use for standard actions or cancellation).
 * @visibleName Button.Submit
 */
class SubmitButton extends React.Component<SubmitButtonProps> {
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

export default SubmitButton;
