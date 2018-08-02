import themeGet from 'extensions/themeGet';
import { NAMESPACE } from 'theme';

describe('the theme getter tool', () => {
  const theme = {
    [NAMESPACE]: {
      colors: {
        primary: 'blue',
        secondary: 'red',
        tertiary: 'green',
      },
      fonts: {
        default: 'Comic Sans',
        fancy: 'Century Gothic',
      },
    },
  };

  test('gets a simple key', () => {
    expect(themeGet('colors.primary')({ theme })).toEqual('blue');
  });

  test('throws on unknown key', () => {
    expect(() => themeGet('foo.bar')({ theme })).toThrow();
  });

  test('can do conditional get', () => {
    const getter = themeGet
      .if(props => props.foo, 'fonts.default')
      .else('fonts.fancy');
    expect(getter({ theme, foo: true })).toEqual('Comic Sans');
    expect(getter({ theme, foo: false })).toEqual('Century Gothic');
  });

  test('can do multi-clause conditional get', () => {
    const getter = themeGet
      .if(props => props.foo === 1, 'colors.primary')
      .if(props => props.foo === 2, 'colors.secondary')
      .else('colors.tertiary');
    expect(getter({ theme, foo: 1 })).toEqual('blue');
    expect(getter({ theme, foo: 2 })).toEqual('red');
    expect(getter({ theme, foo: 3 })).toEqual('green');
  });

  test('can use raw values in else', () => {
    const getter = themeGet
      .if(props => props.foo, 'colors.primary')
      .else('black');

    expect(getter({ theme, foo: false })).toEqual('black');
  });

  test('throws if no else is used in conditional', () => {
    const getter = themeGet.if(props => props.foo, 'colors.primary');

    expect(() => getter({ theme, foo: true })).toThrow();
  });
});
