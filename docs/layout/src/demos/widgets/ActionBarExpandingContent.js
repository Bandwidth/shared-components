import React from 'react';
import Form from './Form';

const style = {
  marginTop: '30px',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingBottom: '30px',
};

export default ({ barHeight, expanded, children }) => (
  <div style={style}>{children}</div>
);
