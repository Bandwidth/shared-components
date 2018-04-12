import React from 'react';

// Variation on defaultProps from recompose library; refs can't be attached to purely functional components, as they
// have no instance.
const defaultPropsComponent = newDefaultProps => Component =>
  class extends React.Component {
    static defaultProps = newDefaultProps;

    render() {
      return <Component {...this.props} />;
    }
  };

export default defaultPropsComponent;
