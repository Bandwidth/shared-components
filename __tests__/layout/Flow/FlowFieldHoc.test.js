import React from 'react';
import {
  FlowFieldHoc,
  FlowItem,
  Input,
  RadioGroup,
  Toggle,
  Checkbox,
  TextArea,
} from '../../../src';

describe('the Flow field HOC', () => {
  describe('wrapping a provided input', () => {
    const inputProps = {
      onChange: jest.fn(),
      value: 'foo',
    };
    let wrapper;

    beforeEach(() => {
      const Field = FlowFieldHoc(Input);
      wrapper = mountWithTheme(<Field input={inputProps} />);
    });

    test('provides input props', () => {
      expect(wrapper.find(Input)).toHaveValue(inputProps.value);
      expect(wrapper.find(Input)).toHaveProp('onChange', inputProps.onChange);
    });

    test('responds to events', () => {
      wrapper.find('input').simulate('change');
      expect(inputProps.onChange).toBeCalled();
    });
  });

  describe('providing additional props', () => {
    const inputProps = {
      onChange: jest.fn(),
      value: 'foo',
    };
    const metaProps = {
      error: 'err',
    };
    const required = true;
    const disabled = true;
    let wrapper;

    beforeEach(() => {
      const Field = FlowFieldHoc(Input);
      wrapper = shallowWithTheme(<Field input={inputProps} meta={metaProps} required={required} disabled={disabled} />);
    });

    test('assigns item props', () => {
      expect(wrapper).toHaveProp('error', !!metaProps.error);
    });

    test('assigns input props', () => {
      const input = wrapper.find(Input);
      expect(input).toHaveProp('required', required);
      expect(input).toHaveProp('disabled', disabled);
      expect(input).toHaveProp('error', !!metaProps.error);
    });
  });

  // test special cases of alignments
  [
    [RadioGroup, { input: { value: 'foo', onChange: jest.fn() }, choices: ['foo'], name: 'bar' }],
    [Checkbox, { input: { value: true, onChange: jest.fn() } }],
    [Toggle, { input: { value: true, onChange: jest.fn() } }],
  ].forEach(([Component, props]) => {
    describe(`wrapping a ${Component.displayName}`, () => {
      test('aligns to the left automatically', () => {
        const Field = FlowFieldHoc(Component);
        const wrapper = shallowWithTheme(<Field {...props} />);
        expect(wrapper.find(FlowItem)).toHaveProp('alignment', 'left');
      });
    });
  });

  describe('wrapping a TextArea', () => {
    test('uses flexible content', () => {
      const Field = FlowFieldHoc(TextArea);
      const wrapper = shallowWithTheme(<Field input={{ value: 'foo' }} />);
      expect(wrapper.find(FlowItem)).toHaveProp('flexibleContent', true);
    });
  });
});
