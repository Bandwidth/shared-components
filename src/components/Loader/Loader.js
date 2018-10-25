import React from 'react';
import PropTypes from 'prop-types';
import { LoaderRing, LoaderContainer } from './styles';

class Loader extends React.PureComponent {
  static propTypes = {
    /**
     * The size of each loader 'dot'. Can be any CSS dimension string.
     */
    size: PropTypes.string,
    /**
     * The color of the loader. Defaults to the primary theme color.
     */
    color: PropTypes.string,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * A component for rendering a ring of the loader
     */
    Ring: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component for rendering the containing block of the loader
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    size: '20px',
    color: null,
    className: null,
    id: null,
    Ring: LoaderRing,
    Container: LoaderContainer,
  };

  render() {
    const { size, color, id, className, Container, Ring, ...rest } = this.props;

    return (
      <Container id={id} className={className} {...rest}>
        <Ring size={size} color={color} />
        <Ring size={size} color={color} />
        <Ring size={size} color={color} />
      </Container>
    );
  }
}

export default Loader;
