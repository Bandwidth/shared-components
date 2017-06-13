import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/Anchor';
import FieldWrapper from './FieldWrapper';

class AnchorField extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    helpText: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    exact: PropTypes.bool,
    children: PropTypes.node,
    callout: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    helpText: null,
    to: '#',
    children: 'Anchor',
    exact: false,
    onClick: () => null,
    callout: null,
  };

  render() {
    const {
      input,
      label,
      id,
      disabled,
      helpText,
      to,
      children,
      exact,
      onClick,
      callout
    } = this.props;
    return (
      <FieldWrapper label={label} helpText={helpText} disabled={disabled} callout={callout}>
        <Anchor id={id} disabled={disabled} to={to} exact={exact} onClick={onClick}>
          {children}
        </Anchor>
      </FieldWrapper>
    );
  }
}

AnchorField.usage = `
# AnchorField

Wait, an anchor isn't an input! But using this component in your form will help any links lay out consistently with other form inputs. Plus, you get to add a label and help text.

Props:

* \`to\`: where the anchor goes. Leave blank if you want to use onClick instead
* \`onClick\`: handler for when the user clicks the anchor
* \`exact\`: children will receive an 'active' prop if the anchor matches the current location. This indicates that match must be exact, not partial.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`callout\`: optional flyout to show on hover
`;

export default AnchorField;
