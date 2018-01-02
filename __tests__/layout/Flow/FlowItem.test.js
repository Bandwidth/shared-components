import React from 'react';
import toJSON from 'enzyme-to-json';
import { FlowItem, Label, HelpText } from '../../../src';
import { withProps } from 'recompose';

describe('the FlowItem component', () => {
  const mocks = {
    Content: createMockComponent('Content'),
    Label: createMockComponent('Label'),
    HelpText: createMockComponent('HelpText'),
    Container: createMockComponent('Container'),
    MoreContent: createMockComponent('MoreContent'),
    FlexibleContent: createMockComponent('FlexibleContent'),
  };
  const TestFlowItem = withProps(mocks)(FlowItem);

  describe('renders with no properties', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<TestFlowItem />).dive();
    });

    test('should render', () => {
      expect(wrapper).toBePresent();
    });

    test('renders a label and contents inside a container despite being empty', () => {
      expect(wrapper.find('Label')).toBePresent();
      expect(wrapper.find('Content')).toBePresent();
      expect(wrapper.find('HelpText')).toBeEmpty();
    });
  });

  describe('renders a label and help text with error prop', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowItem label="foo" helpText="bar" error />,
      ).dive();
    });

    test('renders the correct values', () => {
      const label = wrapper.find('Label');
      const helpText = wrapper.find('HelpText');
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
      wrapper = shallowWithTheme(
        <TestFlowItem helpText={customHelpText} error />,
      ).dive();
    });

    test('renders the help text', () => {
      const helpText = wrapper.find('#custom');
      expect(helpText).toHaveProp('error', true);
    });
  });

  describe('renders children', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<TestFlowItem>foo</TestFlowItem>).dive();
    });

    test('renders children', () => {
      const content = wrapper.find('Content');
      expect(content).toBePresent();
      expect(content).toHaveProp('children', 'foo');
    });
  });

  describe('with custom alignment', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowItem alignment="left">foo</TestFlowItem>,
      ).dive();
    });

    test('applies alignment to container', () => {
      expect(wrapper).toHaveProp('alignment', 'left');
    });
  });

  describe('can render more content', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowItem moreContent="foo">bar</TestFlowItem>,
      ).dive();
    });

    test('adds more content', () => {
      const moreContent = wrapper.find('MoreContent');
      expect(moreContent).toBePresent();
      expect(moreContent).toHaveProp('children', 'foo');
    });
  });

  describe('can render flexible content sizes', () => {
    let wrapper;
    const content = <div style={{ height: '300px' }} />;

    beforeEach(() => {
      wrapper = shallowWithTheme(
        <TestFlowItem flexibleContent>{content}</TestFlowItem>,
      ).dive();
    });

    test('renders flexible content', () => {
      const flexContent = wrapper.find('FlexibleContent');
      expect(flexContent).toBePresent();
      expect(flexContent).toHaveProp('children', content);
      expect(wrapper.find('Content')).toBeEmpty();
    });
  });

  describe('with id and className', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowWithTheme(<TestFlowItem id="a" className="b" />).dive();
    });

    test('assigns them to the container element', () => {
      expect(wrapper).toHaveProp('id', 'a');
      expect(wrapper).toHaveProp('className', 'b');
    });
  });
});

describe('the FlowItem component styling', () => {
  test('with content, label, and helpText', () => {
    const wrapper = mountWithTheme(
      <FlowItem helpText="foo" label="bar">
        baz
      </FlowItem>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with flexible content', () => {
    const wrapper = mountWithTheme(
      <FlowItem flexibleContent>
        <div style={{ height: '300px' }} />
      </FlowItem>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with error', () => {
    const wrapper = mountWithTheme(
      <FlowItem error helpText="bar">
        foo
      </FlowItem>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with more content', () => {
    const wrapper = mountWithTheme(<FlowItem moreContent="baz">foo</FlowItem>);
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with left align', () => {
    const wrapper = mountWithTheme(
      <FlowItem alignment="left" helpText="bar" label="baz">
        foo
      </FlowItem>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
  test('with right align', () => {
    const wrapper = mountWithTheme(
      <FlowItem alignment="right" helpText="bar" label="baz">
        foo
      </FlowItem>,
    );
    expect(toJSON(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
