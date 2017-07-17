import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../../components/Anchor';
import FlowItem from '../FlowItem';

const List = styled.ul`
  appearance: none;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 2px;
`;

const SubFieldContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.padding.small};

  & > * {
    flex: 1;
  }

  & > *:last-child {
    flex-grow: 0;
    flex-basis: auto;
    flex-shrink: 0;
    margin-left: 8px;
  }

  & label {
    display: none;
  }
`;

class FlowMultiField extends React.Component {
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
    <SubFieldContainer key={name}>
      {this.props.renderField(name, index)}
      <Anchor onClick={() => fields.remove(index)}>remove</Anchor>
    </SubFieldContainer>
  );

  render() {
    const { label, helpText, required, id, className, fields } = this.props;
    return (
      <FlowItem
        label={label}
        helpText={helpText}
        required={required}
        id={id}
        className={className}
        flexibleContent
      >
        <List>
          {fields.map(this.renderSubField)}
        </List>
        <Anchor onClick={() => fields.push('')}>add</Anchor>
      </FlowItem>
    );
  }
}

FlowMultiField.List = List;
FlowMultiField.SubFieldContainer = SubFieldContainer;

FlowMultiField.usage = `
A helper component to create Redux Form multi-value fields. Supply a \`renderField\` function prop to render your individual fields, and this component will take care of allowing users to add a new value, delete values, and syncing the values with Redux Form.

\`renderField\` takes two parameters: \`name\` and \`index\`. You can read more in the Redux Form docs.
`;

export default FlowMultiField;
