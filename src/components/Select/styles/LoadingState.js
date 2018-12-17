import React from 'react';
import Loader from 'components/Loader';
import Input from 'components/Input';
import Arrow from './Arrow';
import Controls from './Controls';
import styled from 'styled-components';

const FakeInput = styled(props => <Input as="div" {...props} />)`
  height: 53px;
`;

const Overlay = styled(Loader)`
  position: absolute;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%);
`;

export default props => (
  <FakeInput
    {...props}
    inlineContent={
      <Controls disabled>
        <Arrow />
      </Controls>
    }
  >
    <Overlay />
  </FakeInput>
);
