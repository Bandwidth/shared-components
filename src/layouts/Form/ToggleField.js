import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../../components/Toggle/Toggle';
import BinaryField from './BinaryField';

/**
 * DEPRECATED
 *
 * @class ToggleField
 * @extends {React.Component}
 */
class ToggleField extends React.Component {
  static propTypes = {
    /**
     * A collection of input props. Passed to the input.
     */
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    /**
     * Contents of a label on the field.
     */
    label: PropTypes.string,
    /**
     * Adds an id to the input.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the input.
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
      <BinaryField {...this.props} Input={Toggle} />
    );
  }
}

ToggleField.usage = `
# ToggleField

A toggle-based field. See BinaryField for prop types.

\`\`\`
<ToggleField input={{ value: 'true', onChange=this.onChange }} label="Yes?" disabled />
\`\`\`
`;

export default ToggleField;
