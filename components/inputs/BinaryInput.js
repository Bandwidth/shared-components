import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateId from '../../extensions/generateId';

const Container = styled.div`
  line-height: 1.5em;
  padding-top: 0.4em;
`;

export default class Toggle extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    label: PropTypes.string,
    id: PropTypes.string,

    Input: PropTypes.func.isRequired,
    Label: PropTypes.func.isRequired,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
  };

  handleClick = () => {
    this.props.input.onChange(!this.props.input.value);
  };

  render() {
    const { label, input: { value, disabled }, Input, Label } = this.props;
    let id = this.props.id;

    if (!id) {
      /*
        because this generation happens at render time,
        the id is not reliable. developers should specify an id through
        props if they want a reliable id.
      */
      id = generateId('toggle');
    }

    return (
      <Container>
        <Input id={id} type="checkbox" value={value} disabled={disabled} onClick={this.handleClick} />
        <Label htmlFor={id} active={value}>
          {label}
        </Label>
      </Container>
    );
  }
}
