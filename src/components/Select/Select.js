import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import arrowImage from './arrow.png';

const NONE_KEY = 'BW_SHARED_SELECT_NONE';

const Styles = styled.select`
  padding: ${({ theme }) => theme.padding.medium};
  border: ${({ theme }) => theme.input.border};
  border-radius: 0;
  width: 100%;
  color: ${({ theme }) => theme.input.fg};
  font-family: ${({ theme }) => theme.input.fontFamily};
  font-size: ${({ theme }) => theme.input.fontSize};
  letter-spacing: ${({ theme }) => theme.input.letterSpacing};
  line-height: ${({ theme }) => theme.input.lineHeight};
  cursor: pointer;
  box-shadow: none;
  background-color: ${({ theme }) => theme.input.bg};
  appearance: none;
  position: relative;

  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 35px;

  transition: 0.2s ease all;

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.input.accentValid};
    border-color: ${({ theme }) => theme.input.focusedBorder};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.input.disabledBG};
    color: ${({ theme }) => theme.input.disabledFG};
  }
`;

const selectOptionPrimaryValue = (option) => {
  if (_.isString(option)) {
    return option;
  }
  if (_.isFunction(option.get)) {
    return option.get('id');
  }
  return option.id || '' + option;
};

class Select extends React.Component {
  static propTypes = {
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,

    disabled: PropTypes.bool,

    required: PropTypes.bool,

    noneText: PropTypes.string,

    allowNone: PropTypes.bool,

    options: PropTypes.array.isRequired,

    renderOption: PropTypes.func,

    selectOptionValue: PropTypes.func,

    value: PropTypes.string,

    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    noneText: 'None',
    allowNone: true,
    renderOption: selectOptionPrimaryValue,
    selectOptionValue: selectOptionPrimaryValue,
  };

  handleChange = (ev) => {
    const val = ev.target.value;
    if (val === NONE_KEY) {
      return this.props.onChange(null);
    }

    return this.props.onChange(val);
  };

  renderOptions = () => {
    const {
      options,
      renderOption,
      allowNone,
      noneText,
      selectOptionValue,
    } = this.props;

    const opts = options.map((option) => (
      <option
        key={selectOptionValue(option)}
        value={selectOptionValue(option)}
      >
        {renderOption(option)}
      </option>
    ));

    if (allowNone) {
      opts.unshift(
        <option
          key={NONE_KEY}
          value={NONE_KEY}
        >
          {noneText}
        </option>
      );
    }

    return opts;
  };

  render() {
    return (
      <Styles onChange={this.handleChange} value={this.props.value}>
        {this.renderOptions()}
      </Styles>
    );
  }
}

Select.usage = `
A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
* \`options\`: an array of data
* \`renderOption\`: a function to transform an option item into some text to show. Defaults to \`val => '' + val\`
* \`selectOptionKey\`: a function to transform an option into a **unique** key

\`\`\`
<Select label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
\`\`\`
`;

Select.Container = Styles;

export default Select;
