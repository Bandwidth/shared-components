import React from 'react';
import PropTypes from 'prop-types';
import BinaryField from './BinaryField';
import Checkbox from '../../components/Checkbox';

class CheckboxField extends React.Component {
  static propTypes = {
    /**
     * A collection of input-related properties. All passed to the input.
     */
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    /**
     * Contents of the label above the input.
     */
    label: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
    className: null,
  };

  render() {
    return (
      <BinaryField {...this.props} Input={Checkbox} />
    );
  }
}

CheckboxField.usage = `
# CheckboxField

A checkbox-based field. See BinaryField for prop types.

\`\`\`
<CheckboxField input={{ value: 'true', onChange=this.onChange }} label="Yes?" disabled />
\`\`\`
`;

export default CheckboxField;
