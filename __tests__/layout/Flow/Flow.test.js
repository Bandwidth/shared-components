import React from 'react';
import toJSON from 'enzyme-to-json';
import {
  Flow,
} from '../../../src';

describe('the Flow component', () => {
  test('defines subcomponents', () => {
    expect(Flow.Row).toBeTruthy();
    expect(Flow.createField).toBeTruthy();
    expect(Flow.Item).toBeTruthy();
    expect(Flow.fields).toBeTruthy();
  });
});

describe('the Flow component styling', () => {
  test('containing rows', () => {
    const wrapper = mountWithTheme((
      <Flow>
        <Flow.Row>
          <Flow.Row.Item/>
          <Flow.Row.Item/>
        </Flow.Row>
        <Flow.Row>
          <Flow.Row.Item/>
          <Flow.Row.Item/>
        </Flow.Row>
      </Flow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
