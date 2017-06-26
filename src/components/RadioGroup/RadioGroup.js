import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from './RadioButton';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
  min-height: 53px;
`;

class RadioGroup extends React.Component {
  static propTypes = {
    /**
     * An array of choice objects or strings to create buttons from.
     */
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
    /**
     * A field name for this input.
     */
    name: PropTypes.string.isRequired,
    /**
     * The currently selected value.
     */
    value: PropTypes.string.isRequired,
    /**
     * Called when the input value changes.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Indicates whether the user can change the input.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether the value is required for form input.
     */
    required: PropTypes.bool,
    /**
     * Adds a class name to the group container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the group container element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    className: null,
    id: null,
  };

  choicesToButtons = () => {
    const { choices, value, onChange, disabled, required } = this.props;
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
    const { className, id } = this.props;
    return (
      <Container className={className} id={id}>
        {this.choicesToButtons()}
      </Container>
    );
  }
}

RadioGroup.usage = `
RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in \`value\` and \`onChange\` props. It's a controlled component, so it won\'t update its own value.

\`\`\`
<RadioGroup value="a" onChange={handleChange} choices={['a', 'b']} />
\`\`\`
`;

RadioGroup.Button = RadioButton;
export default RadioGroup;
