import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateId from '../../extensions/generateId';

export const Container = styled.div`
`;

class BinaryField extends React.Component {
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
     * Content of the label above the input.
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
    /**
     * The component to render the input with.
     */
    Input: PropTypes.func.isRequired,
    /**
     * The component to render the input label with (generally the graphical representation of a binary input).
     */
    Label: PropTypes.func.isRequired,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
    className: null,
  };

  handleClick = () => {
    this.props.input.onChange(!this.props.input.value);
  };

  render() {
    const { label, input: { value, disabled }, Input, Label, className } = this.props;
    /*
      because this generation happens at render time,
      the id is not reliable. developers should specify an id through
      props if they want a reliable id.
    */
    const id = this.props.id || generateId('toggle');

    return (
      <Container>
        <Input
          id={id}
          className={className}
          type="checkbox"
          value={value}
          disabled={disabled}
          onClick={this.handleClick}
        />
        <Label htmlFor={id} active={value}>
          {label}
        </Label>
      </Container>
    );
  }
}

BinaryField.usage = `
# BinaryField

This is really more of a base class for inputs which switch between two values (see: Toggle and Checkbox).

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
`;

export default BinaryField;
