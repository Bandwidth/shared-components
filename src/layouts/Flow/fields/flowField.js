import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../../../components/Checkbox';
import Toggle from '../../../components/Toggle';
import TextArea from '../../../components/TextArea';
import RadioGroup from '../../../components/RadioGroup';
import Label from '../../../components/Label';
import Item from '../FlowItem';

/**
 * Creates a wrapper which renders a redux-form Field component as a FlowItem
 */
export default (FieldComponent) => class FlowField extends React.Component {
  static propTypes = {
    ...Item.propTypes,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    choices: PropTypes.array,
    description: PropTypes.string,
    type: PropTypes.string,
    input: PropTypes.shape({
      checked: PropTypes.bool,
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.any,
    }).isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
      active: PropTypes.bool,
      autofilled: PropTypes.bool,
      asyncValidating: PropTypes.bool,
      dirty: PropTypes.bool,
      dispatch: PropTypes.func,
      form: PropTypes.string,
      initial: PropTypes.any,
      invalid: PropTypes.bool,
      pristine: PropTypes.bool,
      submitting: PropTypes.bool,
      submitFailed: PropTypes.bool,
      touched: PropTypes.bool,
      valid: PropTypes.bool,
      visited: PropTypes.bool,
      warning: PropTypes.string,
    }),
    extraProps: PropTypes.object,
  };

  static defaultProps = {
    ...Item.defaultProps,
    meta: {},
    required: false,
    disabled: false,
    options: null,
    choices: null,
    description: null,
    type: null,
    extraProps: {},
  };

  hasFlexibleContent = FieldComponent === TextArea;
  alignment = [RadioGroup, Toggle, Checkbox].includes(FieldComponent) ? 'left' : 'stretch';

  /**
   * Renders the label with required state.
   */
  renderLabel = () => {
    const { label, required } = this.props;
    return <Label required={required}>{label}</Label>;
  };

  /**
   * Renders the input component with desired passed props.
   */
  renderInput = () => {
    const {
      input,
      meta,
      required,
      disabled,
      id,
      className,
      options,
      choices,
      description,
      type,
      height,
      extraProps,
    } = this.props;

    const passedProps = {
      ...extraProps,
      ...input,
      ...meta,
      error: !!meta.error,
      required,
      disabled,
      id,
      className,
      options,
      choices,
      description,
      type,
      height,
    };
     
    return <FieldComponent {...passedProps} />;
  };

  render() {
    const { moreContent, meta, helpText } = this.props;

    return (
      <Item
        label={this.renderLabel()}
        helpText={helpText}
        moreContent={moreContent}
        flexibleContent={this.hasFlexibleContent}
        error={meta.error}
        alignment={this.alignment}
      >
        {this.renderInput()}
      </Item>
    );
  }
};
