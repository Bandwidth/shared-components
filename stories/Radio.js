import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from 'components/Radio';

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

storiesOf('Radio', module)
  .add('types', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Radio onChange={action('onChange')} description="Unselected" />
      <Radio onChange={action('onChange')} checked description="Selected" />
      <Radio
        onChange={action('onChange')}
        disabled
        description="Disabled & unselected"
      />
      <Radio
        onChange={action('onChange')}
        disabled
        checked
        description="Disabled & selected"
      />
    </React.Fragment>
  ))
  .add('rerender keeps id', () => (
    <RenderEverySecond>
      <Radio onChange={action('onChange')} description="Foo" />
    </RenderEverySecond>
  ));
