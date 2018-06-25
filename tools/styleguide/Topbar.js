import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import Anchor from 'components/Anchor';
import Logo from 'components/Logo';
import { H3, H5 } from 'components/H';

const CustomHeader = styled(H3)`
  font-size: 1.55em;
  border-left: 1px solid #333;
  color: #333;
  margin-left: var(--spacing-small);
  padding-left: var(--spacing-small);
`;

const TopbarDiv = styled.div`
  grid-area: topbar;
  background-color: var(--colors-background-default);
  border-bottom: 1px solid var(--colors-border-medium);
  display: grid;
  grid-template-areas: 'logo spacing theme';
  grid-template-columns: fit-content(40%) auto fit-content(40%);
`;

const RadioGroup = styled.div`
  grid-area: theme;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: var(--spacing-large);
`;

const LogoDiv = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  margin-left: var(--spacing-large);
`;

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
      <TopbarDiv>
        <LogoDiv>
          <a href="https://www.bandwidth.com">
            <Logo variant="blue" />
          </a>
          <CustomHeader spacing="0">Shared Component Library</CustomHeader>
        </LogoDiv>
        <Selectable
          exclusive
          initial={initialTheme}
          onItemSelected={onThemeSelect}
          render={this.renderItem}
        />
      </TopbarDiv>
    );
  }
}

export default Topbar;
