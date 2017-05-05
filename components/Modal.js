import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Blocker = styled.div`
  background: ${({ theme }) => theme.modal.blockerBG};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 100000;
`;

const Content = styled.div`
  background: ${({ theme }) => theme.modal.bg};
  width: ${({ theme }) => theme.modal.naturalWidth};
  max-width: ${({ theme }) => theme.modal.maxWidth};
  min-width: ${({ theme }) => theme.modal.minWidth};
  height: ${({ theme }) => theme.modal.naturalHeight};
  min-height: ${({ theme }) => theme.modal.minHeight};
  max-height: ${({ theme }) => theme.modal.maxHeight};
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.shadow};
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  background: ${({ theme }) => theme.modal.titleBG};
  color: ${({ theme }) => theme.modal.titleFG};
  padding: ${({ theme }) => theme.modal.titlePadding};
  font-family: ${({ theme }) => theme.modal.titleFontFamily};
  font-size: ${({ theme }) => theme.modal.titleFontSize};
  font-weight: ${({ theme }) => theme.modal.titleFontWeight};
  text-transform: ${({ theme }) => theme.modal.titleTextTransform};
`;

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    onBlockerClicked: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    onBlockerClicked: () => null,
  };

  render() {
    return (
      <Blocker onClick={this.props.onBlockerClicked}>
        <Content>
          {this.props.title ? <Title>{this.props.title}</Title> : null}
          {this.props.children}
        </Content>
      </Blocker>
    );
  }
}

Modal.usage = `
# Modal

Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides \`title\` prop for adding a title, and \`onBlockerClicked\` if you want to hook the click event on the shadow 'blocker' element which covers the page.

\`\`\`
<Route exact path="/modal">
  <Modal>Content <Link to="/">Close</Link></Modal>
</Route>
\`\`\`
`;

export default Modal;
