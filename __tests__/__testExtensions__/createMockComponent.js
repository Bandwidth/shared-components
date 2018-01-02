import { setDisplayName } from 'recompose';

const createMockComponent = name =>
  setDisplayName(name)(({ children, ...props }) => (
    <div {...props}>{children}</div>
  ));

global.createMockComponent = createMockComponent;
