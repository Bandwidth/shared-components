import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import InputWrapper from '../InputWrapper';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class RadioGroup extends React.Component {
  static propTypes = {
    choices: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.string),
      React.PropTypes.objectOf(React.PropTypes.node),
    ]).isRequired,
    groupLabel: React.PropTypes.string,
    label: React.PropTypes.string,

    input: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired,
    }).isRequired,

    disabled: React.PropTypes.bool,
    helpText: React.PropTypes.string,
    required: React.PropTypes.bool,
  };

  static defaultProps = {
    groupLabel: null,
    label: null,
    disabled: false,
    helpText: null,
    required: false,
  };

  choicesToButtons = () => {
    const { choices, input: { value, onChange }, disabled, required } = this.props;
    if (choices instanceof Array) {
      return choices.map((choice) => (
        <RadioButton
          checked={choice === value}
          name={name}
          label={choice}
          value={choice}
          key={choice}
          disabled={disabled}
          required={required}
          onChange={() => onChange(choice)}
        />
      ));
    } else if (typeof choices === 'object') {
      return Object.keys(choices).map((key) => {
        const choice = choices[key];

        return (
          <RadioButton
            checked={key === value}
            name={name}
            value={key}
            label={key}
            content={choice}
            key={key}
            disabled={disabled}
            required={required}
            onChange={() => onChange(key)}
          />
        );
      });
    } else {
      return 'invalid choices';
    }
  };

  render() {
    const { groupLabel, label, disabled, required, helpText } = this.props;
    return (
      <InputWrapper
        label={label || groupLabel}
        disabled={disabled}
        required={required}
        helpText={helpText}
      >
        <Container>
          {this.choicesToButtons()}
        </Container>
      </InputWrapper>
    );
  }
}

RadioGroup.usage = `
# RadioGroup

RadioGroup is a fully functional input meant to be used in a Redux Form Field. It generates its own radio buttons from the options you supply. You can use it manually by passing in a valid \`input\` prop which contains a \`value\` and \`onChange\` handler. It's a controlled component, so it won\'t update its own value.

\`\`\`
<RadioGroup input={{ value: 'a', onChange=this.handleChange }} choices={['a', 'b']} label="Your choices" />
\`\`\`
`;

export default RadioGroup;