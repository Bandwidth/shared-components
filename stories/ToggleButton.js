import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToggleButton from 'components/ToggleButton';
import Horizontal from 'layouts/Horizontal';

storiesOf('ToggleButton', module).add('types', () => (
  <React.Fragment>
    <h2>Standard</h2>
    <Horizontal>
      <ToggleButton name="one" onClick={action('onClick')} selected>
        On
      </ToggleButton>
      <ToggleButton name="two" onClick={action('onClick')}>
        Off
      </ToggleButton>
    </Horizontal>
    <h2>Small</h2>
    <Horizontal>
      <ToggleButton.Small name="small-one" onClick={action('onClick')} selected>
        Small on
      </ToggleButton.Small>
      <ToggleButton.Small name="small-two" onClick={action('onClick')}>
        Small off
      </ToggleButton.Small>
    </Horizontal>
    <h2>Colorful</h2>
    <Horizontal>
      <ToggleButton.Colorful
        name="colorful-one"
        onClick={action('onClick')}
        selected
      >
        On
      </ToggleButton.Colorful>
      <ToggleButton.Colorful name="colorful-two" onClick={action('onClick')}>
        Off
      </ToggleButton.Colorful>
    </Horizontal>
  </React.Fragment>
));
