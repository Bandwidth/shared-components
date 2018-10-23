import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from 'components/Toggle';
import Grid from 'layouts/Grid';

class RenderEverySecond extends React.Component {
  state = { ct: 0 };

  componentDidMount = () => {
    this.__interval = setInterval(
      () => this.setState(state => ({ ct: state.ct + 1 })),
      1000,
    );
  };

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          description: 'Count: ' + this.state.ct,
        })}
      </div>
    );
  }
}

storiesOf('Toggle', module)
  .add('standard', () => (
    <Grid columns={1}>
      <h2>Standard</h2>
      <Toggle onChange={action('onChange')} description="Off" />
      <Toggle onChange={action('onChange')} description="On" value={true} />
      <h2>Disabled</h2>
      <Toggle
        onChange={action('onChange')}
        disabled
        description="Disabled Off"
      />
      <Toggle
        onChange={action('onChange')}
        disabled
        description="Disabled On"
        value={true}
      />
    </Grid>
  ))
  .add('rerender keeps id', () => (
    <React.Fragment>
      <RenderEverySecond>
        <Toggle onChange={action('onChange')} description="Off" />
      </RenderEverySecond>
      <RenderEverySecond>
        <Toggle onChange={action('onChange')} description="Off" />
      </RenderEverySecond>
    </React.Fragment>
  ));
