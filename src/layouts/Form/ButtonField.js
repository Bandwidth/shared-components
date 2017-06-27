import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FieldWrapper from './FieldWrapper';

class ButtonField extends React.Component {
  static propTypes = {
    /**
     * Contents of the button.
     */
    children: PropTypes.node.isRequired,
    /**
     * Handler for a click event on the button.
     */
    onClick: PropTypes.func,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Content of the label above the button.
     */
    label: PropTypes.string,
    /**
     * Adds an id to the button element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the button element.
     */
    className: PropTypes.string,
    /**
     * Sets the type of the button.
     */
    type: PropTypes.string,
    /**
     * Contents of the help text below the button.
     */
    helpText: PropTypes.string,
    /**
     * Glyph name for the icon that pops in from the left of the button on hover.
     */
    leftIcon: PropTypes.string,
    /**
     * Glyph name for the icon that pops in from the right of the button on hover.
     */
    rightIcon: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    className: null,
    type: 'text',
    helpText: null,
    onClick: () => null,
    leftIcon: null,
    rightIcon: null,
  };

  render() {
    const {
      children,
      onClick,
      label,
      id,
      disabled,
      helpText,
      type,
      leftIcon,
      rightIcon,
      callout,
      className
    } = this.props;
    return (
      <FieldWrapper label={label} helpText={helpText} callout={callout}>
        <Button
          onClick={onClick}
          id={id}
          className={className}
          type={type}
          disabled={disabled}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          {children}
        </Button>
      </FieldWrapper>
    );
  }
}

ButtonField.usage = `
# ButtonField

Kind of like a Button, but with a label above and help text below. Add them with \`label\` and \`helpText\` properties. This makes it more at home in a form. It's highly recommended to use ButtonField in a form, even if you don't use label or help text, since it lays out better.
`;

export default ButtonField;
