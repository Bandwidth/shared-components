import Checkbox from 'components/Checkbox';
import React from 'react';
import { withProps } from 'recompose';
import { shallow } from 'enzyme';

const mocks = {
  Label: createMockComponent('Label'),
  Input: createMockComponent('Input'),
  Container: createMockComponent('Container'),
};

describe('the Checkbox component', () => {
  const TestCheckbox = withProps(mocks)(Checkbox);

  test('renders a container with input and label', () => {
    const wrapper = shallow(<TestCheckbox />).dive();
    expect(wrapper.find('Container')).toBePresent();
    expect(wrapper.find('Input')).toBePresent();
    expect(wrapper.find('Label')).toBePresent();
  });

  test('generates an id for the input and label', () => {
    const wrapper = shallow(<TestCheckbox />).dive();
    expect(wrapper.find('Input').prop('id')).toMatch(/checkbox.*/);
    expect(wrapper.find('Label').prop('htmlFor')).toMatch(/checkbox.*/);
    expect(wrapper.find('Input').prop('id')).toEqual(
      wrapper.find('Label').prop('htmlFor'),
    );
  });
});
