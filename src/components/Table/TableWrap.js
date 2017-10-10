import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('TableWrap', ({ colors }) => ({
    background: colors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.border,
    borderRadius: '5px 5px 0 0',
    fontSize: '1em',
    shadowColor: colors.shadow,
  }))
  .createSelector();

const WrapStyles = theme.connect(styled.div`
  ${spreadStyles(select)}
  width: 100%;
  overflow-x: auto;
  position: relative;

  ${(props) => {
    const shadowColor = select('shadowColor')(props);
    switch (props.shadow) {
      case 'left':
        return `box-shadow: inset 15px 0 10px -10px ${shadowColor}};`;
      case 'right':
        return `box-shadow: inset -15px 0 10px -10px ${shadowColor};`;
      case 'both':
        return `box-shadow: inset -15px 0 10px -10px ${shadowColor}, inset 15px 0 10px -10px ${shadowColor};`;
      default:
        return '';
    }
  }}
`, { pure: false });

class TableWrap extends React.Component {
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

    this._wrap.addEventListener('scroll', _.debounce(() => {
      this.setWrapShadow(this.computeWrapShadow());
    }, 300, { leading: true }));

    window.addEventListener('resize', _.debounce(() =>{
      this.setWrapShadow(this.computeWrapShadow());
    }, 300, { leading: true }));
  }

  setWrapShadow = (shadow) => {
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
      <WrapStyles innerRef={(el) => this._wrap = el} shadow={this.state.shadow}>
        {this.props.children}
      </WrapStyles>
    )
  }
}

export default TableWrap;
