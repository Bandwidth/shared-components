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
    /**
     * A list of strings or rendered nodes to render as the choices.
     */
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
    /**
     * Contents of the label above the field.
     */
    label: PropTypes.string,
    /**
     * A collection of input properties. Passed to the input.
     */
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    }).isRequired,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Contents of the help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Indicates whether this field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Adds an id to the radio group element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the radio group element.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    groupLabel: null,
    label: null,
    disabled: false,
    helpText: null,
    required: false,
    id: null,
    className: null,
  };

  render() {
    const { label, disabled, required, helpText, input, choices, id, className } = this.props;
    return (
      <FieldWrapper
        label={label}
        disabled={disabled}
        required={required}
        helpText={helpText}
      >
        <RadioGroup {...input} choices={choices} id={id} className={className} />
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
