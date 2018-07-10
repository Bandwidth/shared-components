import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
const RadioButton = RadioGroup.Button;

const Container = styled.div`
  display: flex;
  max-width: 250px;
  & > * {
    flex: 1 1 auto;
  }
  & > * + * {
    margin-left: var(--spacing-medium);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  & > * {
    flex: 1 1 auto;
  }
`;

class TimePicker extends React.Component {
  state = {
    amActive: true,
  };

  render() {
    const { amActive } = this.state;
    return (
      <Container>
        <Input.Small type="time" min="01:00" max="12:00" autoComplete={false} />
        <FlexContainer>
          <RadioButton.Small
            name="timePeriod"
            value="am"
            label="AM"
            checked={amActive}
          />
          <RadioButton.Small
            name="timePeriod"
            value="pm"
            label="PM"
            checked={!amActive}
          />
        </FlexContainer>
      </Container>
    );
  }
}

export default TimePicker;
