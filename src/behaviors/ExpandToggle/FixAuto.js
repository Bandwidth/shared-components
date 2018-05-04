import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatedValue } from 'react-spring';

const getValues = object => Object.values(object);
const check = value => value === 'auto';
const convert = (acc, [name, value]) => ({
  ...acc,
  [name]: new AnimatedValue(value),
});
const overwrite = (width, height) => (acc, [name, value]) => ({
  ...acc,
  [name]: value === 'auto' ? (name === 'height' ? height : width) : value,
});

/**
 * Using a custom auto-size fixing calculator
 * while https://github.com/drcmda/react-spring/pull/76#issuecomment-386326322
 * is still open.
 */
export default function fixAuto(spring, props) {
  const { native, children, from, to } = props;

  // Dry-route props back if nothing's using 'auto' in there
  if (![...Object.values(from), ...Object.values(to)].some(check)) return;

  const forward = spring.getForwardProps(props);
  const allProps = Object.entries({ ...from, ...to });

  // Collect to-state props
  const componentProps = native
    ? allProps.reduce(convert, forward)
    : { ...from, ...to, ...forward };

  return (
    <div
      style={{ visibility: 'hidden', position: 'absolute' }}
      ref={ref => {
        if (ref) {
          // Once it's rendered out, fetch bounds
          const height = ref.clientHeight;
          const width = ref.clientWidth;

          // Defer to next frame, or else the springs updateToken is canceled
          requestAnimationFrame(() =>
            spring.updateProps(
              {
                ...props,
                from: Object.entries(from).reduce(
                  overwrite(width, height),
                  from,
                ),
                to: Object.entries(to).reduce(overwrite(width, height), to),
              },
              true,
            ),
          );
        }
      }}
    >
      {children(componentProps)}
    </div>
  );
}
