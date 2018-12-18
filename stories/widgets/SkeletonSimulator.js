import React from 'react';
import styled from 'styled-components';
import SkeletonTransition from 'skeletons/SkeletonTransition';
import { CSSTransition } from 'react-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import P from 'components/P';
import lorem from 'lorem-ipsum';

export default class SkeletonSimulator extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    this.interval = setInterval(this.toggleLoading, 2000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({ loading: !loading }));
  };

  render() {
    const { render, renderLoading } = this.props;
    const { loading } = this.state;
    // return (
    //   <ReactCSSTransitionReplace
    //     transitionName="cross-fade"
    //     transitionEnterTimeout={1000}
    //     transitionLeaveTimeout={1000}
    //   >
    //     {loading ? <div>Red</div> : <div>Blue</div>}
    //   </ReactCSSTransitionReplace>
    // );
    // return (
    //   <Container>
    //     <CSSTransition
    //       in={loading}
    //       unmountOnExit
    //       classNames="cross-fade"
    //       timeout={5000}
    //     >
    //       <span>
    //         <P.Skeleton rows={10} />
    //       </span>
    //     </CSSTransition>
    //     <CSSTransition
    //       in={!loading}
    //       unmountOnExit
    //       classNames="cross-fade"
    //       timeout={5000}
    //     >
    //       <span>
    //         <P>{lorem({ count: 10 })}</P>
    //       </span>
    //     </CSSTransition>
    //   </Container>
    // );
    return (
      <SkeletonTransition
        loading={loading}
        render={() => <P>{lorem({ count: 10 })}</P>}
        renderLoading={() => <P.Skeleton />}
      />
    );
  }
}
