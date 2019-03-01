import React from 'react';
import Button from '../Button';
import { mount } from 'enzyme';

describe('<Button />', () => {
  it('renders contents', () => {
    const contents = 'foo';
    const wrapper = mount(<Button>{contents}</Button>);
    expect(wrapper).toHaveText(contents);
  });

  it('attaches standard props', () => {
    expect(Button).toAttachStandardProps('button', { children: 'foo' });
  });
});
