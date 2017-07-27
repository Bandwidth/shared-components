import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import _ from 'lodash';

const WrapStyles = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.table.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px 5px 0 0;
  overflow-x: auto;
  position: relative;
  font-size: ${({ theme }) => theme.table.fontSize};

  ${({ shadow }) => {
    switch (shadow) {
      case 'left':
        return 'box-shadow: inset 15px 0 10px -10px rgba(0,0,0,0.2);';
      case 'right':
        return 'box-shadow: inset -15px 0 10px -10px rgba(0,0,0,0.2);';
      case 'both':
        return 'box-shadow: inset -15px 0 10px -10px rgba(0,0,0,.2), inset 15px 0 10px -10px rgba(0,0,0,.2);';
      default:
        return '';
    }
  }};
`;

export class Wrap extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    shadow: null,
  };

  componentDidMount() {
    this.updateAndSubscribeWrapShadowChanges();
  }

  componentDidUpdate() {
    this.updateAndSubscribeWrapShadowChanges();
  }

  updateAndSubscribeWrapShadowChanges = () => {
    this.setWrapShadow(this.computeWrapShadow());

    this._wrap.addEventListener(
      'scroll',
      _.debounce(
        () => {
          this.setWrapShadow(this.computeWrapShadow());
        },
        300,
        { leading: true },
      ),
    );

    window.addEventListener(
      'resize',
      _.debounce(
        () => {
          this.setWrapShadow(this.computeWrapShadow());
        },
        300,
        { leading: true },
      ),
    );
  };

  setWrapShadow = shadow => {
    if (this.state.shadow === shadow) {
      return;
    }

    this.setState({ shadow });
  };

  computeWrapShadow = () => {
    const wrap = this._wrap;

    if (!wrap) {
      return null;
    }

    const left = wrap.scrollLeft > 0;
    const right = wrap.scrollWidth !== wrap.clientWidth + wrap.scrollLeft;

    if (left && right) {
      return 'both';
    } else if (left) {
      return 'left';
    } else if (right) {
      return 'right';
    }

    return null;
  };

  render() {
    return (
      <WrapStyles innerRef={el => (this._wrap = el)} shadow={this.state.shadow}>
        {this.props.children}
      </WrapStyles>
    );
  }
}

export default sharedComponent({ Container: WrapStyles, Styled: WrapStyles })(Wrap);
