import * as React from 'react';
import * as styles from './styles';
import defaultProps from 'extensions/defaultProps';
import dotNotation from 'extensions/dotNotation';

interface NoteProps {
  /**
   * Contents of the note
   */
  children: React.ReactNode;
  /**
   * Override the component that renders the outer container
   */
  Container?: any;
  /**
   * Override the component that renders the corner
   */
  Corner?: any;
}

const Note: React.FC<NoteProps> = ({
  children,
  Container,
  Corner,
  ...rest
}) => (
  <Container {...rest}>
    {children}
    <Corner />
  </Container>
);

Note.defaultProps = {
  Container: styles.Container,
  Corner: styles.Corner,
};

export default dotNotation(Note, {
  styles,
  Alternate: defaultProps({
    Container: (styles.Container as any).Alternate,
  })(Note),
});
