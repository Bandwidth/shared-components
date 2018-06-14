import React from 'react';
import PropTypes from 'prop-types';
import Field from 'field-day';
import { defaultProps } from 'recompose';
import Label from 'components/Label';
import themeGet from 'extensions/themeGet';
import HelpText from 'components/HelpText';

const translateHorizontalAlign = align => {
  switch (align) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return align;
  }
};

const translateVerticalAlign = align => {
  switch (align) {
    case 'top':
      return 'start';
    case 'bottom':
      return 'end';
    default:
      return align;
  }
};

const getHtmlFor = children => {
  if (children.props && children.props.id) {
    return children.props.id;
  }
};

const getRequired = children => children.props && children.props.required;

const renderLabel = ({ gridArea, fieldProps }) => {
  const label = fieldProps.label;

  if (!label) {
    return null;
  }

  const style = {
    gridArea,
    justifySelf:
      translateHorizontalAlign(fieldProps.labelHorizontalAlign) || 'start',
    alignSelf: translateVerticalAlign(fieldProps.labelVerticalAlign) || 'end',
  };

  const htmlFor = fieldProps.fieldId || getHtmlFor(fieldProps.children);

  if (typeof label === 'string') {
    return (
      <Label
        className="field-label"
        style={style}
        htmlFor={htmlFor}
        spacing={{ bottom: 'sm' }}
        required={fieldProps.required || getRequired(fieldProps.children)}
      >
        {label}
      </Label>
    );
  }

  if (typeof label === 'function') {
    return label({
      style,
      htmlFor,
      fieldProps,
    });
  }

  return React.cloneElement(label, {
    style,
    className: 'field-label',
    htmlFor,
  });
};

const renderHelpText = ({ gridArea, fieldProps }) => {
  const helpText = fieldProps.helpText;

  if (!helpText && !fieldProps.error) {
    return null;
  }

  const style = {
    gridArea,
    justifySelf:
      translateHorizontalAlign(fieldProps.helpTextHorizontalAlign) || 'start',
  };

  if (typeof helpText === 'string') {
    return (
      <HelpText
        className="field-helptext"
        style={style}
        spacing={{ top: 'sm' }}
        error={!!fieldProps.error}
      >
        {fieldProps.error || helpText}
      </HelpText>
    );
  }

  if (typeof helpText === 'function') {
    return helpText({
      style,
      fieldProps,
    });
  }

  return React.cloneElement(helpText, {
    style,
    className: 'field-helptext',
  });
};

const renderContent = ({ gridArea, fieldProps }) => {
  const children = fieldProps.children;

  if (!children) {
    return null;
  }

  const style = {
    gridArea,
    justifySelf:
      translateHorizontalAlign(
        fieldProps.contentHorizontalAlign || fieldProps.alignContent,
      ) || 'stretch',
    alignSelf:
      translateVerticalAlign(
        fieldProps.contentVerticalAlign || fieldProps.alignContentVertically,
      ) || 'start',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="field-content" style={style}>
      {children}
      {renderHelpText({ gridArea, fieldProps })}
    </div>
  );
};

const customFieldElements = [
  {
    height: 'auto',
    render: renderLabel,
  },
  {
    height: 'auto',
    render: renderContent,
  },
];

const FieldGroup = defaultProps({
  fieldElements: customFieldElements,
  className: 'field-group',
  fieldSpacing: '30px',
})(Field.Group);

FieldGroup.Field = Field;
Field.Group = FieldGroup;

FieldGroup.propTypes = {
  /**
   * The number of columns in the field layout
   */
  columns: PropTypes.number,
  /**
   * An id to assign to the group element
   */
  id: PropTypes.string,
  /**
   * A class name to assign to the group element
   */
  className: PropTypes.string,
  /**
   * Style overrides for the group element
   */
  style: PropTypes.object,
};

const horizontalAlignments = [
  'left',
  'right',
  'center',
  'stretch',
  'start',
  'end',
];
const verticalAlignments = [
  'top',
  'bottom',
  'center',
  'stretch',
  'start',
  'end',
];

Field.propTypes = {
  /**
   * A label for the field
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  /**
   * Help text for the field
   */
  helpText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  /**
   * Whether the field is required (affects label render)
   */
  required: PropTypes.bool,
  /**
   * How many columns the field should take up
   */
  columnSpan: PropTypes.number,
  /**
   * How content should align horizontally
   */
  contentHorizontalAlign: PropTypes.oneOf(horizontalAlignments),
  /**
   * How content should align vertically
   */
  contentVerticalAlign: PropTypes.oneOf(verticalAlignments),
  /**
   * Alias for contentHorizontalAlign
   */
  alignContent: PropTypes.oneOf(horizontalAlignments),
  /**
   * Alias for contentVerticalAlign
   */
  alignContentVertically: PropTypes.oneOf(verticalAlignments),
  /**
   * How the label should align horizontally
   */
  labelHorizontalAlign: PropTypes.oneOf(horizontalAlignments),
  /**
   * How the label should align vertically
   */
  labelVerticalAlign: PropTypes.oneOf(verticalAlignments),
  /**
   * How the help text should align horizontally
   */
  helpTextHorizontalAlign: PropTypes.oneOf(horizontalAlignments),
};

export default FieldGroup;
