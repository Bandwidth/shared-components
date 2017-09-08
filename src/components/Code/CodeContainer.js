import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import CodeBlock from './CodeBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Content = styled.div`
  background: ${({ theme }) => theme.code.bg};
  padding: ${({ theme }) => theme.code.padding};
  color: ${({ theme }) => theme.code.fg};

  & > ${CodeBlock.Wrapper} {
    padding: 0;
  }
`;

class CodeContainer extends React.Component {
  static propTypes = {
    /**
     * Multiple CodeBlock elements to render in one frame.
     */
    children: PropTypes.node.isRequired,
    /**
     * An optional header element to place above the frame.
     */
    header: PropTypes.node,
    /**
     * A class name to add to the container element.
     */
    className: PropTypes.string,
    /**
     * An id to add to the container element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    header: null,
    className: null,
    id: null,
  };

  render() {
    const { header, children, className, id } = this.props;
    return (
      <Container className={className} id={id}>
        {header}
        <Content>
          {children}
        </Content>
      </Container>
    );
  }
}

<<<<<<< HEAD

export default CodeContainer;
=======
export default sharedComponent(`
When you want to make a big block of code which contains multiple elements (including non-code labels), this component can wrap everything with a nice consistent background and foreground.

Also allows a header to be rendered above.

\`\`\`
<CodeContainer header={someHeaderNode}>
  <Code>some thing;</Code>
  <h3>a label for next thing</h3>
  <Code>some other thing;</Code>
</CodeContainer>
\`\`\`
`, { Container, Content })(CodeContainer);
>>>>>>> Wrap all components in an HOC
