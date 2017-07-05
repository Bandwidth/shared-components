import React from 'react';
import toJSON from 'enzyme-to-json';
import {
  FlowRow,
} from '../../src';

describe('the FlowRow component', () => {
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
      const container = wrapper.find(FlowRow.Container);
      const nodes = container.find(FlowRow.Item);
      expect(container.props().suppressLabels).toBe(false);
      expect(nodes).toHaveLength(2);
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
      const container = wrapper.find(FlowRow.Container);
      const nodes = container.find(FlowRow.Item);
      expect(container.props().suppressLabels).toBe(true);
      expect(nodes).toHaveLength(2);
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
      const container = wrapper.find(FlowRow.Container);
      const nodes = container.find(FlowRow.Item);
      expect(container.props().suppressLabels).toBe(false);
      expect(nodes).toHaveLength(2);
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
});
