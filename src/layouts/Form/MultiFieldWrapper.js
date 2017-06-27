import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../components/Anchor';
import FieldWrapper from './FieldWrapper';

export const List = styled.ul`
  appearance: none;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 2px;
`;

export const SubFieldContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.input.margin};
`;

class MultiFieldWrapper extends React.Component {
  static propTypes = {
    /**
     * redux-form defined fields object.
     */
    fields: PropTypes.shape({
      name: PropTypes.string,
      forEach: PropTypes.func,
      get: PropTypes.func,
      getAll: PropTypes.func,
      insert: PropTypes.func,
      length: PropTypes.number,
      map: PropTypes.func,
      move: PropTypes.func,
      pop: PropTypes.func,
      push: PropTypes.func,
      remove: PropTypes.func,
      removeAll: PropTypes.func,
      shift: PropTypes.func,
      swap: PropTypes.func,
      unshift: PropTypes.func,
    }).isRequired,
    /**
     * Function which renders a field. Function signature is (name, index) => field
     */
    renderField: PropTypes.func.isRequired,
    /**
     * Contents of the label above the fields.
     */
    label: PropTypes.string,
    /**
     * Contents of the help text below the fields.
     */
    helpText: PropTypes.string,
    /**
     * Indicates whether this value is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Adds an id to the container element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the container element.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    required: false,
  };

  renderSubField = (name, index, fields) => (
    <SubFieldContainer key={index}>
      {this.props.renderField(name, index)}
      <Anchor onClick={() => fields.remove(index)}>remove</Anchor>
    </SubFieldContainer>
  );

  render() {
    const { label, helpText, required, id, className } = this.props;
    return (
      <FieldWrapper label={label} helpText={helpText} required={required} id={id} className={className}>
        <List>
          {this.props.fields.map(this.renderSubField)}
        </List>
        <Anchor onClick={() => this.props.fields.push('')}>add</Anchor>
      </FieldWrapper>
    );
  }
}

MultiFieldWrapper.usage = `
# MultiFieldWrapper

Provides a way to wrap a field for usage in a Redux Form FieldArray. Hooks into functions on the provided \`fields\` prop to manipulate its parent array of fields using some rendered controls.

Example usage:

\`\`\`
export default class MultiTextInput extends React.Component {
  renderField = (name, index) => (
    <Field
      component={TextBox}
      name={name}
    />
  );

  render() {
    return (
      <MultiFieldWrapper
        name={this.props.name}
        fields={this.props.fields}
        renderField={this.renderField}
        label={this.props.label}
        helpText={this.props.helpText}
        required={this.props.required}
      />
    );
  }
}
\`\`\`
`;

export default MultiFieldWrapper;
