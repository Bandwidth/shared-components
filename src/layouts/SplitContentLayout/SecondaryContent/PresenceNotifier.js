import React from 'react';

export default class SecondaryContentPresenceNotifier extends React.PureComponent {
  componentDidMount() {
    this.props.updateSecondaryContentPresence(true);
  }
  render() {
    return null;
  }
}
