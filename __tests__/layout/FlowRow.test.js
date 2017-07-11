import React from 'react';
import toJSON from 'enzyme-to-json';
import {
  FlowRow,
  Label,
} from '../../src';

describe('the FlowRow component', () => {
  test('defines subcomponents', () => {
    expect(FlowRow.Item).toBeTruthy();
  });

  describe('rendering two items with labels', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme((
        <FlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item label="bar" />
        </FlowRow>
      ));
    });

    test('renders items with labels', () => {
      expect(wrapper.find(FlowRow.Container)).toHaveProp('suppressLabels', false);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });

  describe('rendering two items without labels', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme((
        <FlowRow>
          <FlowRow.Item />
          <FlowRow.Item />
        </FlowRow>
      ));
    });

    test('renders items with suppressed labels', () => {
      expect(wrapper.find(FlowRow.Container)).toHaveProp('suppressLabels', true);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });

  describe('rendering one item with a label and the other without', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme((
        <FlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item />
        </FlowRow>
      ));
    });

    test('renders items with labels', () => {
      expect(wrapper.find(FlowRow.Container)).toHaveProp('suppressLabels', false);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });
});

describe('the FlowRow component styling', () => {
  test('with two labeled items', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item label="foo" />
        <FlowRow.Item label="bar" />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with two unlabeled items', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with one labeled item and one not', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item label="foo" />
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with nesting', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item />
        <FlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item />
        </FlowRow>
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with just one item', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with 3 items', () => {
    const wrapper = mountWithTheme((
      <FlowRow>
        <FlowRow.Item />
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with alignment left', () => {
    const wrapper = mountWithTheme((
      <FlowRow alignment="left">
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with alignment right', () => {
    const wrapper = mountWithTheme((
      <FlowRow alignment="right">
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>
    ));
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
