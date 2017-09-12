import React from 'react';
import toJSON from 'enzyme-to-json';
import {
  FlowItem,
  Label,
  HelpText,
} from '../../../src';

describe('the FlowItem component', () => {
  describe('renders with no properties', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem />);
    });

    test('should render', () => {
      expect(wrapper).toBePresent();
    });

    test('renders a label and contents inside a container despite being empty', () => {
      expect(wrapper.children().find(Label)).toBePresent();
      expect(wrapper.children().find(FlowItem.Content)).toBePresent();
      expect(wrapper.children().find(HelpText)).toBeEmpty();
    });
  });

  describe('renders a label and help text with error prop', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem label="foo" helpText="bar" error />);
    });

    test('renders the correct values', () => {
      const label = wrapper.children().find(Label);
      const helpText = wrapper.children().find(HelpText);
      expect(label).toBePresent();
      expect(helpText).toBePresent();
      expect(label).toHaveProp('children', 'foo');
      expect(helpText).toHaveProp('children', 'bar');
      expect(helpText).toHaveProp('error', true);
    });
  });

  describe('renders custom help text', () => {
    let wrapper;
    let customHelpText = <div id="custom">This is custom</div>;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem helpText={customHelpText} error />);
    });

    test('renders the help text', () => {
      const helpText = wrapper.children().find('#custom');
      expect(helpText).toHaveProp('error', true);
    });
  });

  describe('renders children', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem>foo</FlowItem>);
    });

    test('renders children', () => {
      const content = wrapper.children().find(FlowItem.Content);
      expect(content).toBePresent();
      expect(content).toHaveProp('children', 'foo');
    });
  });

  describe('with custom alignment', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem alignment="left">foo</FlowItem>);
    });

    test('applies alignment to container', () => {
      expect(wrapper).toHaveProp('alignment', 'left');
    });
  });

  describe('can render more content', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem moreContent="foo">bar</FlowItem>);
    });

    test('adds more content', () => {
      const moreContent = wrapper.children().find(FlowItem.MoreContent);
      expect(moreContent).toBePresent();
      expect(moreContent).toHaveProp('children', 'foo');
    });
  });

  describe('can render flexible content sizes', () => {
    let wrapper;
    const content = <div style={{ height: '300px' }} />;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem flexibleContent>{content}</FlowItem>);
    });

    test('renders flexible content', () => {
      const container = wrapper.children();
      const flexContent = container.find(FlowItem.FlexibleContent);
      expect(flexContent).toBePresent();
      expect(flexContent).toHaveProp('children', content);
      expect(container.find(FlowItem.Content)).toBeEmpty();
    });
  });

  describe('with id and className', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<FlowItem id="a" className="b" />);
    });

    test('assigns them to the container element', () => {
      expect(wrapper).toHaveProp('id', 'a');
      expect(wrapper).toHaveProp('className', 'b');
    });
  });
});

describe('the FlowItem component styling', () => {
  test('with content, label, and helpText', () => {
    const wrapper = mountWithTheme(<FlowItem helpText="foo" label="bar">baz</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with flexible content', () => {
    const wrapper = mountWithTheme(<FlowItem flexibleContent><div style={{ height: '300px' }} /></FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with error', () => {
    const wrapper = mountWithTheme(<FlowItem error helpText="bar">foo</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with more content', () => {
    const wrapper = mountWithTheme(<FlowItem moreContent="baz">foo</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with left align', () => {
    const wrapper = mountWithTheme(<FlowItem alignment="left" helpText="bar" label="baz">foo</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with right align', () => {
    const wrapper = mountWithTheme(<FlowItem alignment="right" helpText="bar" label="baz">foo</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
