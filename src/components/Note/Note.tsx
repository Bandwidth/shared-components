import * as React from 'react';
import * as styles from './styles';
import { defaultProps } from 'recompose';

interface NoteProps {
  /**
   * Contents of the note
   */
  children: React.ReactNode;
  /**
   * Override the component that renders the outer container
   */
  Container: any;
  /**
   * Override the component that renders the corner
   */
  Corner: any;
}

interface Note
  extends React.SFC<
      React.ClassAttributes<HTMLDivElement> &
        React.HTMLAttributes<HTMLDivElement> &
        NoteProps
    > {
  styles: any;
  Alternate: any;
}

const Note: Note = ({ children, Container, Corner, ...rest }) => (
  <Container {...rest}>
    {children}
    <Corner />
  </Container>
);

Note.styles = styles;

Note.defaultProps = {
  Container: styles.Container,
  Corner: styles.Corner,
};

Note.Alternate = defaultProps({
  Container: (styles.Container as any).Alternate,
})(Note);

export default Note;
