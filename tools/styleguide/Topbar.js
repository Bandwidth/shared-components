import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import { H5 } from 'components/H';
import Logo from 'components/Logo';
import RadioButton from 'components/RadioGroup/RadioButton';
import Navigation from 'components/Navigation';

const RadioGroup = styled.div`
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
  <a href="/" style={{ display: 'inline-block', 'line-height': 0 }}>
    <Logo.Primary />
  </a>
);

class Topbar extends React.Component {
  renderItem = ({ selectItem, selected }) => (
    <RadioGroup>
      <H5 spacing={{ right: 'md' }}>Theme:</H5>
      <RadioButton.Group>
        {['iris', 'catapult'].map(name => (
          <RadioButton.Small
            name={name}
            label={name}
            checked={selected.has(name)}
            onChange={ev => selectItem(name)}
          />
        ))}
      </RadioButton.Group>
    </RadioGroup>
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
