import React from 'react';

export default class ActionBarPresenceNotifier extends React.PureComponent {
  componentDidMount() {
    this.props.updateActionBarPresence(true);
  }
  render() {
    return null;
  }
}
