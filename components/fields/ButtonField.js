import React from 'react';
import PropTypes from 'prop-types';
import Button from '../inputs/Button';
import FieldWrapper from './FieldWrapper';

class ButtonField extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    helpText: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    type: 'text',
    helpText: null,
    onClick: () => null,
  };

  render() {
    const { children, onClick, label, id, disabled, helpText, type } = this.props;
    return (
      <FieldWrapper label={label} helpText={helpText}>
        <Button onClick={onClick} id={id} type={type} disabled={disabled}>{children}</Button>
      </FieldWrapper>
    );
  }
}

ButtonField.usage = `
# ButtonField

Kind of like a Button, but with a label above and help text below. Add them with \`label\` and \`helpText\` properties. This makes it more at home in a form. It's highly recommended to use ButtonField in a form, even if you don't use label or help text, since it lays out better.
`;

export default ButtonField;