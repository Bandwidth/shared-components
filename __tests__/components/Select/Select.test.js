import React from 'react';
import toJSON from 'enzyme-to-json';
import { Select } from '../../../src';

describe('the Select component', () => {
  describe('with string options', () => {
    let wrapper;
    const options = ['foo', 'bar', 'baz'];
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          allowNone={false}
          onChange={onChange}
          value="foo"
        />,
      );
    });

    test('renders options correctly', () => {
      expect(
        wrapper.containsAllMatchingElements(
          options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          )),
        ),
      ).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'baz' } });
      expect(onChange).toBeCalledWith('baz');
    });
  });

  describe('with complex options and a custom selector', () => {
    let wrapper;
    const options = [
      { custom: 'foo', name: 'bar' },
      { custom: 'bin', name: 'baz' },
      { custom: 'bop', name: 'cor' },
    ];
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          allowNone={false}
          onChange={onChange}
          value="foo"
          selectOptionValue={option => option.custom}
          renderOption={option => option.name}
        />,
      );
    });

    test('renders options correctly', () => {
      expect(
        wrapper.containsAllMatchingElements(
          options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          )),
        ),
      ).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'bin' } });
      expect(onChange).toBeCalledWith('bin');
    });
  });

  describe('with complex options', () => {
    let wrapper;
    const options = [
      { id: 'foo', name: 'bar' },
      { id: 'bin', name: 'baz' },
      { id: 'bop', name: 'cor' },
    ];
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          allowNone={false}
          onChange={onChange}
          value="foo"
        />,
      );
    });

    test('renders options correctly', () => {
      expect(
        wrapper.containsAllMatchingElements(
          options.map(option => (
            <option key={option.id} value={option.id}>
              {option.id}
            </option>
          )),
        ),
      ).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'bin' } });
      expect(onChange).toBeCalledWith('bin');
    });
  });

  describe('with map options', () => {
    let wrapper;
    const options = [
      { get: () => 'foo', name: 'bar' },
      { get: () => 'bin', name: 'baz' },
      { get: () => 'bop', name: 'cor' },
    ];
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          allowNone={false}
          onChange={onChange}
          value="foo"
          renderOption={option => option.name}
        />,
      );
    });

    test('renders options correctly', () => {
      expect(
        wrapper.containsAllMatchingElements(
          options.map(option => (
            <option key={option.get()} value={option.get()}>
              {option.name}
            </option>
          )),
        ),
      ).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'bin' } });
      expect(onChange).toBeCalledWith('bin');
    });
  });

  describe('with nonstandard options', () => {
    let wrapper;
    const options = [
      { custom: 'foo', name: 'bar' },
      { custom: 'bin', name: 'baz' },
      { custom: 'bop', name: 'cor' },
    ];
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          allowNone={false}
          onChange={onChange}
          value="foo"
        />,
      );
    });

    test('renders options correctly', () => {
      expect(
        wrapper.containsAllMatchingElements(
          options.map(option => (
            <option key={JSON.stringify(option)} value={JSON.stringify(option)}>
              {JSON.stringify(option)}
            </option>
          )),
        ),
      ).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'bin' } });
      expect(onChange).toBeCalledWith('bin');
    });
  });

  describe('with none option', () => {
    let wrapper;
    const options = ['foo', 'bar', 'baz'];
    const noneText = 'Custom';
    const onChange = jest.fn();

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <Select
          options={options}
          onChange={onChange}
          value="foo"
          noneText={noneText}
        />,
      );
    });

    test('renders options correctly', () => {
      const expected = [
        <option key="BW_SHARED_SELECT_NONE" value="BW_SHARED_SELECT_NONE">
          {noneText}
        </option>,
        ...options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        )),
      ];
      expect(wrapper.containsAllMatchingElements(expected)).toBe(true);
    });

    test('selects an option value', () => {
      wrapper
        .find(Select.Container)
        .simulate('change', { target: { value: 'BW_SHARED_SELECT_NONE' } });
      expect(onChange).toBeCalledWith(null);
    });
  });
});

describe('the Select component styling', () => {
  test('with string options', () => {
    const wrapper = mountWithTheme(
      <Select options={['foo', 'bar', 'baz']} value="bar" />,
    );
    expect(wrapper).toMatchStyledComponentsSnapshot();
  });
});
