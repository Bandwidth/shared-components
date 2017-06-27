import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/Anchor';
import FieldWrapper from './FieldWrapper';

/**
 * A form field which renders a link.
 *
 * @class AnchorField
 * @extends {React.Component}
 */
class AnchorField extends React.Component {
  static propTypes = {
    /**
     * Deprecated: has no effect.
     */
    disabled: PropTypes.bool,
    /**
     * The content of the label above the anchor.
     */
    label: PropTypes.string,
    /**
     * Adds an id to the anchor element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the anchor element.
     */
    className: PropTypes.string,
    /**
     * Content of the help text below the anchor.
     */
    helpText: PropTypes.string,
    /**
     * The location the anchor should link to.
     */
    to: PropTypes.string,
    /**
     * Handler for when the anchor element is clicked.
     */
    onClick: PropTypes.func,
    /**
     * Anchors can render differently when they match the current route. This indicates whether that match is exact.
     */
    exact: PropTypes.bool,
    /**
     * Content of the anchor element.
     */
    children: PropTypes.node,
    /**
     * An optional callout to show when hovering the field.
     */
    callout: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    className: null,
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
      callout,
      className,
    } = this.props;
    return (
      <FieldWrapper label={label} helpText={helpText} disabled={disabled} callout={callout}>
        <Anchor id={id} className={className} disabled={disabled} to={to} exact={exact} onClick={onClick}>
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
