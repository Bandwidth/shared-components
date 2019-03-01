import React from 'react';
import { mount, render } from 'enzyme';
import diff from 'jest-diff';

expect.extend({
  toAttachStandardProps(Component, attachElementSelector, requiredProps = {}) {
    // these are the "basic" props that most components should attach
    const inputProps = {
      id: 'id',
      className: 'className',
      // an example data attribute
      'data-bw': 'data-bw',
    };

    const wrapper = mount(<Component {...requiredProps} {...inputProps} />);

    if (attachElementSelector && !wrapper.exists(attachElementSelector)) {
      const markup = render(
        <Component {...requiredProps} {...inputProps} />,
      ).text();
      const message = () =>
        this.utils.matcherHint('toAttachStandardProps', undefined, undefined, {
          comment: 'Basic props attached',
          isNot: this.isNot,
          promise: this.promise,
        }) +
        'Expected to find element at selector ' +
        attachElementSelector +
        ', but did not find one. Actual markup below:\n\n' +
        markup;

      return {
        pass: false,
        message,
      };
    }

    const attachElement = wrapper.find(attachElementSelector);

    const elementProps = attachElement.props();
    const attachedProps = {
      id: elementProps.id,
      className: elementProps.className,
      'data-bw': elementProps['data-bw'],
    };

    // compare classnames separately
    const { className: inputClassName, ...compareInputProps } = inputProps;
    const {
      className: attachedClassName,
      ...compareAttachedProps
    } = attachedProps;

    const pass =
      this.equals(compareInputProps, compareAttachedProps) &&
      attachedClassName.split(' ').includes(inputClassName);

    if (!pass) {
      const message = () =>
        this.utils.matcherHint('toAttachStandardProps', undefined, undefined, {
          comment: 'Basic props attached',
          isNot: this.isNot,
          promise: this.promise,
        }) +
        'Expected to find all standard props attached, but found:\n\n' +
        diff(inputProps, attachedProps, { expand: this.expand });

      return {
        pass,
        message,
      };
    } else {
      return { pass, message: () => 'passed' };
    }
  },
});
