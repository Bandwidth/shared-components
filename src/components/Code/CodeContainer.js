import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeBlock from './CodeBlock';
import theme from '../../theme';

const select = theme
  .register('CodeContainer', ({ colors }) => ({
    layoutDirection: 'column',
    background: colors.grayDark,
    padding: '2em',
    color: colors.white,
  }))
  .createSelector();

const Container = theme.connect(styled.div`
  display: flex;
  flex-direction: ${select('layoutDirection')};
  padding: 0;
`);

const Content = theme.connect(styled.div`
  background: ${select('background')};
  padding: ${select('padding')};
  color: ${select('color')};
`);

// defining a variant of codeblock without padding to use inside the container
theme.registerVariant('CodeBlock', 'disablePadding', { padding: '0' });

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


export default theme.variant('disablePadding')(CodeContainer);
