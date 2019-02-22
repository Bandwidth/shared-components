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
