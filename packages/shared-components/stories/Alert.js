import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from 'components/Alert';
import Grid from 'layouts/Grid';
import ipsum from 'lorem-ipsum';

class DismissState extends React.PureComponent {
  state = { show: true };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { show } = this.state;
    if (show) {
      return React.cloneElement(this.props.children, {
        onClose: this.handleClose,
      });
    }
    return (
      <button style={{ margin: 'auto' }} onClick={this.handleShow}>
        Restore
      </button>
    );
  }
}

class RotatingAlerts extends React.PureComponent {
  state = { alerts: [] };
  intervalRef = null;

  componentDidMount() {
    this.addAlert();
    setTimeout(() => {
      this.addAlert();
      this.intervalRef = setInterval(this.addAlert, 1000);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  randomType = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 1:
        return 'success';
      case 2:
        return 'error';
      default:
        return 'info';
    }
  };

  addAlert = () => {
    const alert = {
      message: ipsum({ count: Math.floor(Math.random() * 4) }),
      type: this.randomType(),
      id: Math.random(),
    };
    this.setState(({ alerts }) => ({
      alerts: [alert, ...alerts],
    }));
  };

  removeAlert = id => {
    this.setState(({ alerts }) => ({
      alerts: alerts.filter(al => al.id !== id),
    }));
  };

  render() {
    return (
      <React.Fragment>
        {Object.values(this.state.alerts).map(alert => (
          <Alert
            key={alert.id}
            type={alert.type}
            onClose={() => this.removeAlert(alert.id)}
            closeTimeout={5000}
          >
            {alert.message}
          </Alert>
        ))}
      </React.Fragment>
    );
  }
}

storiesOf('Alert', module)
  .add('types', () => (
    <Grid columns={1}>
      <h2>Standard</h2>
      <Alert type="info">Info</Alert>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>
      <h2>Small</h2>
      <Alert.Small type="info">Info</Alert.Small>
      <Alert.Small type="success">Success</Alert.Small>
      <Alert.Small type="error">Error</Alert.Small>
    </Grid>
  ))
  .add('textOnly', () => (
    <Grid columns={1}>
      <h2>Text Only</h2>
      <Alert textOnly type="info">
        Info
      </Alert>
      <Alert textOnly type="success">
        Success
      </Alert>
      <Alert textOnly type="error">
        Error
      </Alert>
    </Grid>
  ))
  .add('dismissable', () => (
    <Grid columns={1}>
      <DismissState>
        <Alert type="info">Close me!</Alert>
      </DismissState>
      <DismissState>
        <Alert type="error">{ipsum({ count: 5 })}</Alert>
      </DismissState>
      <DismissState>
        <Alert.Small type="success">{ipsum({ count: 5 })}</Alert.Small>
      </DismissState>
      <h2>Auto-dismiss</h2>
      <DismissState>
        <Alert type="error" closeTimeout={4000}>
          Wait 4 seconds
        </Alert>
      </DismissState>
    </Grid>
  ))
  .add('grouped', () => (
    <Alert.Group>
      <RotatingAlerts />
    </Alert.Group>
  ))
  .add('global', () => (
    <Alert.Group.Global>
      <RotatingAlerts />
    </Alert.Group.Global>
  ));
