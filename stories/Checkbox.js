import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from 'components/Checkbox';

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

storiesOf('Checkbox', module)
  .add('types', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Checkbox onChange={action('checkbox')} description="Foo" />
      <h2>Disabled</h2>
      <Checkbox disabled description="Disabled" />
      <Checkbox disabled checked description="Disabled checked" />
    </React.Fragment>
  ))
  .add('rerender keeps id', () => (
    <RenderEverySecond>
      <Checkbox onChange={action('checkbox')} description="Foo" />
    </RenderEverySecond>
  ));
