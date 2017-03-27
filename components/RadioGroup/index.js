import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Label from '../Label';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class RadioGroup extends React.Component {
  static propTypes = {
    choices: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    groupLabel: React.PropTypes.string,

    input: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    groupLabel: null,
  };

  choicesToButtons = () => {
    const { choices, input: { value, onChange } } = this.props;
    return choices.map((choice) => (
      <RadioButton
        checked={choice === value}
        name={name}
        label={choice}
        value={choice}
        key={choice}
        onChange={() => onChange(choice)}
      />
    ));
  };

  render() {
    const { groupLabel } = this.props;
    return (
      <div>
        {
          groupLabel ?
            <Label>{groupLabel}</Label> :
            null
        }
        <Container>
          {this.choicesToButtons()}
        </Container>
      </div>
    );
  }
}
