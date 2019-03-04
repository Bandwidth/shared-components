import * as React from 'react';
import * as styles from './styles';

interface LoaderProps {
  /**
   * The size of each loader 'dot'. Can be any CSS dimension string.
   */
  size: string;
  /**
   * The color of the loader. Defaults to the primary theme color.
   */
  color: string;
  /**
   * A component for rendering a ring of the loader
   */
  Ring: any;
  /**
   * A component for rendering the containing block of the loader
   */
  Container: any;
}

/**
 * Drop a loader anywhere you want to display a loading animation. It should self-center in a flexbox.
 * Use the `size` prop to pass a custom dot size, `color` to override the color.
 */
class Loader extends React.PureComponent<
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    LoaderProps
> {
  static defaultProps = {
    size: '20px',
    color: null,
    Ring: styles.Ring,
    Container: styles.Container,
  };

  static styles = styles;

  render() {
    const { size, color, Container, Ring, ...rest } = this.props;

    return (
      <Container {...rest}>
        <Ring size={size} color={color} />
        <Ring size={size} color={color} />
        <Ring size={size} color={color} />
      </Container>
    );
  }
}

export default Loader;
