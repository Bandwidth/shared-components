import React from 'react';
import toJSON from 'enzyme-to-json';
import { FlowRow, Label } from '../../../src';
import { withProps } from 'recompose';

describe('the FlowRow component', () => {
  const mocks = {
    Styles: createMockComponent('Container'),
  };
  const TestFlowRow = withProps(mocks)(FlowRow);

  test('defines subcomponents', () => {
    expect(FlowRow.Item).toBeTruthy();
  });

  describe('rendering two items with labels', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item label="bar" />
        </TestFlowRow>,
      ).dive();
    });

    test('renders items with labels', () => {
      expect(wrapper.find('Container')).toHaveProp('suppressLabels', false);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });

  describe('rendering two items without labels', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowRow>
          <FlowRow.Item />
          <FlowRow.Item />
        </TestFlowRow>,
      ).dive();
    });

    test('renders items with suppressed labels', () => {
      expect(wrapper.find('Container')).toHaveProp('suppressLabels', true);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });

  describe('rendering one item with a label and the other without', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item />
        </TestFlowRow>,
      ).dive();
    });

    test('renders items with labels', () => {
      console.log(wrapper.debug());
      expect(wrapper.find('Container')).toHaveProp('suppressLabels', false);
      expect(wrapper.find(FlowRow.Item)).toHaveLength(2);
    });
  });
});

describe('the FlowRow component styling', () => {
  test('with two labeled items', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item label="foo" />
        <FlowRow.Item label="bar" />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with two unlabeled items', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with one labeled item and one not', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item label="foo" />
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with nesting', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item />
        <FlowRow>
          <FlowRow.Item label="foo" />
          <FlowRow.Item />
        </FlowRow>
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with just one item', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with 3 items', () => {
    const wrapper = mountWithTheme(
      <FlowRow>
        <FlowRow.Item />
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with alignment left', () => {
    const wrapper = mountWithTheme(
      <FlowRow alignment="left">
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });

  test('with alignment right', () => {
    const wrapper = mountWithTheme(
      <FlowRow alignment="right">
        <FlowRow.Item />
        <FlowRow.Item />
      </FlowRow>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
