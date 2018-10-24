import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import TableWrapShadow from './styles/TableWrapShadow';

// FIXME: profiling suggests this component is inefficient with rendering.

class TableWrap extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * A component to render as the wrapping component.
     * Passed a prop, 'shadow'=['left'|'right'|'both'], to indicate
     * the scroll position and what side of the wrapper should be shadowed.
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  };

  static defaultProps = {
    Styles: TableWrapShadow,
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
      debounce(
        () => {
          this.setWrapShadow(this.computeWrapShadow());
        },
        300,
        { leading: true },
      ),
    );

    window.addEventListener(
      'resize',
      debounce(
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
    const { children, Styles } = this.props;

    return (
      <Styles ref={el => (this._wrap = el)} shadow={this.state.shadow}>
        {children}
      </Styles>
    );
  }
}

export default TableWrap;
