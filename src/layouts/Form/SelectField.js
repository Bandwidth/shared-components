import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper';
import Select from '../../components/Select';

class SelectField extends React.Component {
  static propTypes = {
    /**
     * Input props, expected to be passed by redux-form
     */
    input: PropTypes.shape({
      /** The currently selected value */
      value: PropTypes.any,
      /** Event handler for change in value */
      onChange: PropTypes.func,
    }).isRequired,
    /**
     * All possible values
     */
    options: PropTypes.array,
    /**
     * Function to render the display of a value
     */
    renderOption: PropTypes.func,
    /**
     * Can the user select 'none' ?
     */
    allowNone: PropTypes.bool,
    /**
     * Text to show if none is selected
     */
    noneText: PropTypes.string,
    /**
     * Adds a label above the select
     */
    label: PropTypes.string,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Contents of the help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Generates a React component iteration key from an object.
     */
    selectOptionKey: PropTypes.func,
    /**
     * Optional callout contents if the user hovers the field.
     */
    callout: PropTypes.node,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
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
    callout: null,
  };

  render() {
    const {
      label,
      helpText,
      disabled,
      required,
      input,
      noneText,
      renderOption,
      callout,
      id,
      className,
      computeValue,
      selectOptionKey,
      options,
      allowNone,
    } = this.props;
    return (
      <FieldWrapper
        label={label}
        helpText={helpText}
        disabled={disabled}
        required={required}
        callout={callout}
      >
        <Select
          {...input}
          disabled={disabled}
          required={required}
          id={id}
          className={className}
          renderOption={renderOption}
          selectOptionKey={selectOptionKey}
          computeValue={computeValue}
          options={options}
          allowNone={allowNone}
          noneText={noneText}
        />
      </FieldWrapper>
    );
  }
}

SelectField.usage = `
# SelectField

A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
* \`options\`: an array of data
* \`renderOption\`: a function to transform an option item into some text to show. Defaults to \`val => '' + val\`
* \`selectOptionKey\`: a function to transform an option into a **unique** key
* \`callout\`: optional flyout to show on hover

\`\`\`
<SelectField label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
\`\`\`
`;

export default SelectField;
