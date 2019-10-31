import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const BlockerScreen = styled.div`
  background: ${get('colors.shadow.default')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 1000000;
`;

const Blocker = ({ children }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const modalElement = document.createElement('div');
    modalElement.setAttribute('aria-modal', 'true')
    document.body.appendChild(modalElement);
    setElement(modalElement);

    return () => {
      document.body.removeChild(modalElement);
    };
  }, []);

  if (element == null) {
    return null;
  }

  return ReactDOM.createPortal(
    <BlockerScreen>{children}</BlockerScreen>,
    element,
  );
};

export default Blocker;
