import React from 'react';
import Field from 'field-day';
import { defaultProps } from 'recompose';
import Label from 'components/Label';
import themeGet from 'extensions/themeGet';
import HelpText from 'components/HelpText';

const getHtmlFor = (children): ?string => {
  if (children.props && children.props.id) {
    return ((children.props.id: any): string);
  }
};

const renderLabel = ({ gridArea, fieldProps }) => {
  const label = fieldProps.label;

  if (!label) {
    return null;
  }

  const style = {
    gridArea,
    justifySelf: fieldProps.labelHorizontalAlign || 'start',
    alignSelf: fieldProps.labelVerticalAlign || 'end',
  };

  const htmlFor = fieldProps.fieldId || getHtmlFor(fieldProps.children);

  if (typeof label === 'string') {
    return (
      <Label
        className="field-label"
        style={style}
        htmlFor={htmlFor}
        spacing={{ bottom: 'sm' }}
        required={fieldProps.required}
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
    justifySelf: fieldProps.helpTextHorizontalAlign || 'start',
    alignSelf: fieldProps.helpTextVerticalAlign || 'end',
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
    justifySelf: fieldProps.alignContent || 'stretch',
    alignSelf: fieldProps.alignContentVertically || 'start',
    marginBottom: '30px',
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

export default FieldGroup;
