import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../../components/Toggle/Toggle';
import BinaryField from './BinaryField';

class ToggleField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    label: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
  };

  render() {
    return (
      <BinaryField {...this.props} Input={Toggle.Input} Label={Toggle} />
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
