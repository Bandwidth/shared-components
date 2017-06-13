import React from 'react';
import PropTypes from 'prop-types';
import BinaryField from './BinaryField';
import Checkbox from '../../components/Checkbox';

class CheckboxField extends React.Component {
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
      <BinaryField {...this.props} Input={Checkbox.Input} Label={Checkbox} />
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
