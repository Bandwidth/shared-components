import React from 'react';
import styled from 'styled-components';
import { H5 } from 'components/H';
import Logo from 'components/Logo';
import RadioButton from 'components/RadioButton';
import Navigation from 'components/Navigation';
import Selectable from 'behaviors/Selectable';

const RadioContainer = styled.div`
  grid-area: theme;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: var(--spacing-large);
`;

const CustomNav = styled(Navigation.Light)`
  grid-area: topbar;
`;

const LinkedLogo = () => (
  <a href="/" style={{ display: 'inline-block', lineHeight: 0 }}>
    <Logo.Primary />
  </a>
);

class Topbar extends React.Component {
  renderItem = ({ selectItem, selected }) => (
    <RadioContainer>
      <H5 spacing={{ right: 'md' }}>Theme:</H5>
      <RadioButton.Group>
        {['iris', 'catapult'].map(name => (
          <RadioButton.Small
            key={name}
            name={name}
            value={name}
            label={name}
            checked={selected.has(name)}
            onChange={ev => selectItem(name)}
          />
        ))}
      </RadioButton.Group>
    </RadioContainer>
  );

  render() {
    const { onThemeSelect, initialTheme } = this.props;
    return (
      <CustomNav>
        <Navigation.Title Logo={LinkedLogo}>
          Shared Component Library
        </Navigation.Title>
        <Selectable
          exclusive
          initial={initialTheme}
          onItemSelected={onThemeSelect}
          render={this.renderItem}
        />
      </CustomNav>
    );
  }
}

export default Topbar;
