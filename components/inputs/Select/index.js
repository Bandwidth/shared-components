import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectItem from './SelectItem';
import InputBox from '../InputBox';
import InputWrapper from '../InputWrapper';
import arrowImage from './arrow.png';

const HTMLSelect = styled.select`
  padding: ${({ theme }) => theme.input.padding};
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
`;

class Select extends React.Component {
  static propTypes = {
    /** Input props, expected to be passed by redux-form */
    input: PropTypes.shape({
      /** The currently selected value */
      value: PropTypes.any,
      /** Event handler for change in value */
      onChange: PropTypes.func,
    }).isRequired,
    /** All possible values */
    options: PropTypes.array,
    /** Function to render the display of a value */
    renderOption: PropTypes.func,
    /** Can the user select 'none' ? */
    allowNone: PropTypes.bool,
    /** Text to show if none is selected */
    noneText: PropTypes.string,
    /** Adds a label above the select */
    label: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    helpText: PropTypes.string,
    selectOptionKey: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    renderOption: (val) => '' + val,
    allowNone: true,
    noneText: 'None',
    label: null,
    disabled: false,
    required: false,
    helpText: null,
    selectOptionKey: (option) => option.key || option.id || '' + option,
  };

  renderOptions = () => {
    const { options, renderOption, selectOptionKey, allowNone, noneText } = this.props;
    const opts = options.map((option) => (
      <SelectItem key={selectOptionKey(option)}>{renderOption(option)}</SelectItem>
    ));
    if (allowNone) {
      opts.unshift(<SelectItem key="None">{noneText}</SelectItem>);
    }

    return opts;
  };

  render() {
    const { label, helpText, disabled, required, input, noneText, renderOption } = this.props;
    return (
      <InputWrapper
        label={label}
        helpText={helpText}
        disabled={disabled}
        required={required}
      >
        <HTMLSelect
          {...input}
          value={input.value ? renderOption(input.value) : noneText}
          disabled={disabled}
          required={required}
        >
          {this.renderOptions()}
        </HTMLSelect>
      </InputWrapper>
    );
  }
}

Select.usage = `
# Select

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

export default Select;