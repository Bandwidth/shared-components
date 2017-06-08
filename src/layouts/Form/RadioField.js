import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioGroup from '../../components/RadioGroup';
import FieldWrapper from './FieldWrapper';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class RadioField extends React.Component {
  static propTypes = {
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
    label: PropTypes.string,

    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    }).isRequired,

    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    groupLabel: null,
    label: null,
    disabled: false,
    helpText: null,
    required: false,
  };

  render() {
    const { label, disabled, required, helpText, input, choices } = this.props;
    return (
      <FieldWrapper
        label={label}
        disabled={disabled}
        required={required}
        helpText={helpText}
      >
        <RadioGroup {...input} choices={choices} />
      </FieldWrapper>
    );
  }
}

RadioField.usage = `
# RadioField

RadioField is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in a valid \`input\` prop which contains a \`value\` and \`onChange\` handler. It's a controlled component, so it won\'t update its own value.

\`\`\`
<RadioField value="a" onChange={handleChange} choices={['a', 'b']} />
\`\`\`
`;

export default RadioField;
