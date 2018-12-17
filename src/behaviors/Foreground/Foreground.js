import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import * as styles from './styles';

const context = createContext({
  element: null,
});

/**
 * Provides context for Foreground components used downstream in the app.
 * Renders an empty <div> which will portal in all foreground elements rendered
 * elsewhere alongside any provided children.
 */
class ForegroundProvider extends React.Component {
  static propTypes = {
    /**
     * You can choose to provide your own custom element for the Foreground system to
     * use instead of rendering one here. If you provide this prop an HTML element,
     * this component will not render the default element and will make all Foreground
     * components render into your provided element.
     */
    element: PropTypes.any,
    Layer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    Layer: styles.ForegroundLayer,
  };

  static styles = styles;

  state = {
    element: null,
  };

  elementRef = element => {
    this.setState({ element });
  };

  render() {
    const { children, Layer, element: externalElement, ...rest } = this.props;
    const { element: internalElement } = this.state;

    const element = externalElement || internalElement;

    return (
      <context.Provider value={{ element }}>
        {children}
        {!externalElement && <Layer ref={this.elementRef} {...rest} />}
      </context.Provider>
    );
  }
}

/**
 * Just wrap any component in Foreground, and it will be rendered into
 * an overlay div above your app.
 */
const Foreground = ({ children }) => (
  <context.Consumer>
    {({ element }) => {
      if (!element) {
        return null;
      }

      return createPortal(children, element);
    }}
  </context.Consumer>
);

Foreground.Provider = ForegroundProvider;
Foreground.styles = styles;

/**
 * @component
 * Just wrap any component in Foreground, and it will be rendered into
 * an overlay div above your app.
 */
export default Foreground;
