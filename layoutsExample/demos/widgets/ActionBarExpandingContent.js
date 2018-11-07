import React from 'react';

const style = {
  marginTop: '30px',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingBottom: '30px',
};

export default ({ barHeight, expanded, children }) => (
  <div style={style}>{children}</div>
);
