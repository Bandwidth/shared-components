import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import RadioButton from './RadioButton';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
  min-height: 53px;
`;

export class RadioGroup extends React.Component {
  static propTypes = {
    /**
     * An array of choice objects or strings to create buttons from.
     */
    options: PropTypes.oneOfType([
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
    /**
     * Deprecated: see options
     */
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]),
  };

  static defaultProps = {
    disabled: false,
    required: false,
    className: null,
    id: null,
    choices: null,
  };

  getOptions = () => this.props.options || this.props.choices;

  optionsToButtons = () => {
    const { value, onChange, disabled, required } = this.props;
    const options = this.getOptions();
    if (options instanceof Array) {
      return options.map(choice =>
        <RadioButton
          checked={choice === value}
          name={name}
          label={choice}
          value={choice}
          key={choice}
          disabled={disabled}
          required={required}
          onChange={() => onChange(choice)}
        />,
      );
    } else if (typeof options === 'object') {
      return Object.keys(options).map(key => {
        const choice = options[key];

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
      return 'invalid options';
    }
  };

  render() {
    const { className, id } = this.props;
    return (
      <Container className={className} id={id}>
        {this.optionsToButtons()}
      </Container>
    );
  }
}

export default sharedComponent({ Button: RadioButton, Container })(RadioGroup);
