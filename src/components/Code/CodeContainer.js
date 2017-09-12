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
  background: ${({ theme }) => theme.colors.grayDark};
  padding: 2em;
  color: ${({ theme }) => theme.colors.white};

  & > ${CodeBlock.Wrapper} {
    padding: 0;
  }
`;

export class CodeContainer extends React.Component {
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

export default sharedComponent({ Styled: Container, Content })(CodeContainer);
