import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  appearance: none;
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
  };

  renderSubField = (name, index, fields) => (
    <SubFieldContainer key={index}>
      {this.props.renderField(name, index)}
      <Link onClick={() => fields.remove(index)}>remove</Link>
    </SubFieldContainer>
  );

  render() {
    return (
      <Container>
        <List>
          {this.props.fields.map(this.renderSubField)}
        </List>
        <Link onClick={() => this.props.fields.push('')}>add</Link>
      </Container>
    );
  }
}

MultiInputWrapper.usage = `
# MultiInputWrapper

Provides a way to wrap a field for usage in a Redux Form FieldArray. Hooks into functions on the provided \`fields\` prop to manipulate its parent array of fields using some rendered controls.
`;

export default MultiInputWrapper;