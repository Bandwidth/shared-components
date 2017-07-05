import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../../components/Checkbox';
import Toggle from '../../components/Toggle';
import TextArea from '../../components/TextArea';
import RadioGroup from '../../components/RadioGroup';
import Label from '../../components/Label';
import Item from './FlowItem';

/**
 * Creates a wrapper which renders a redux-form Field component as a FlowItem
 */
export default (FieldComponent) => class FlowField extends React.Component {
  static propTypes = {
    ...Item.propTypes,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
    }),
  };

  static defaultProps = {
    ...Item.defaultProps,
    meta: {},
    required: false,
    disabled: false,
  };

  hasFlexibleContent = FieldComponent === TextArea;
  alignment = [RadioGroup, Toggle, Checkbox].includes(FieldComponent) ? 'left' : 'stretch';

  /**
   * Renders the label with required state. Also handles special cases.
   */
  renderLabel = () => {
    const { label, required } = this.props;
    // suppress label on Checkbox and Toggle, which render their own
    if (FieldComponent === Checkbox || FieldComponent === Toggle) {
      return null;
    }

    return <Label required={required}>{label}</Label>;
  };

  /**
   * Renders the input component with desired passed props.
   */
  renderInput = () => {
    const { input, meta } = this.props;

    const passedProps = {
      ...this.props,
      ...input,
      ...meta,
    };

    return <FieldComponent {...passedProps} />;
  };

  render() {
    const { moreContent, meta, helpText, suppressLabel } = this.props;

    return (
      <Item
        label={this.renderLabel()}
        helpText={helpText}
        moreContent={moreContent}
        flexibleContent={this.hasFlexibleContent}
        error={!!meta.error}
        alignment={this.alignment}
        suppressLabel={suppressLabel}
      >
        {this.renderInput()}
      </Item>
    );
  }
};
