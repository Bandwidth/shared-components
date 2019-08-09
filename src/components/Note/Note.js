import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { defaultProps } from 'recompose';

const Note = ({ children, Container, Corner, ...rest }) => (
  <Container {...rest}>
    {children}
    <Corner />
  </Container>
);

Note.styles = styles;

Note.propTypes = {
  /**
   * Contents of the note
   */
  children: PropTypes.node.isRequired,
  /**
   * Override the component that renders the outer container
   */
  Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Override the component that renders the corner
   */
  Corner: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Note.defaultProps = {
  className: 'scl-note',
  Container: styles.Container,
  Corner: styles.Corner,
};

Note.Alternate = defaultProps({
  Container: styles.Container.Alternate,
})(Note);

export default Note;
