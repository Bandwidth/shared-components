import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Label from '../Label';

const Wrap = styled.div`
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class RadioGroup extends React.Component {
  static propTypes = {
    choices: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.string),
      React.PropTypes.objectOf(React.PropTypes.node),
    ]).isRequired,
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
    if (choices instanceof Array) {
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
            onChange={() => onChange(key)}
          />
        );
      });
    } else {
      return 'invalid choices';
    }
  };

  render() {
    const { groupLabel } = this.props;
    return (
      <Wrap>
        {
          groupLabel ?
            <Label>{groupLabel}</Label> :
            null
        }
        <Container>
          {this.choicesToButtons()}
        </Container>
      </Wrap>
    );
  }
}
