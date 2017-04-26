import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link';
import InputWrapper from './InputWrapper';

const List = styled.ul`
  appearance: none;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 2px;
`;

const SubFieldContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.input.margin};
`;

class MultiInputWrapper extends React.Component {
  static propTypes = {
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

    renderField: PropTypes.func.isRequired,
    label: PropTypes.string,
    helpText: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    required: false,
  };

  renderSubField = (name, index, fields) => (
    <SubFieldContainer key={index}>
      {this.props.renderField(name, index)}
      <Link onClick={() => fields.remove(index)}>remove</Link>
    </SubFieldContainer>
  );

  render() {
    const { label, helpText, required } = this.props;
    return (
      <InputWrapper label={label} helpText={helpText} required={required}>
        <List>
          {this.props.fields.map(this.renderSubField)}
        </List>
        <Link onClick={() => this.props.fields.push('')}>add</Link>
      </InputWrapper>
    );
  }
}

MultiInputWrapper.usage = `
# MultiInputWrapper

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
      <MultiInputWrapper
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

export default MultiInputWrapper;