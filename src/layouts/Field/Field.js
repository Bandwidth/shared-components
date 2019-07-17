import React from 'react';
import PropTypes from 'prop-types';
import { Callout } from 'components';
import DefaultLabel from 'components/Label';
import DefaultHelpText from 'components/HelpText';
import * as styles from './styles';
import FieldGroup from './FieldGroup';
import get from 'lodash.get';

const Field = ({
  columnSpan,
  alignContent,
  alignContentVertically,
  label,
  required,
  disabled,
  children,
  helpText,
  Label,
  LabelContainer,
  HelpText,
  Content,
  HelpIcon,
  helpCallout,
  helpCalloutProps,
  error,
  Container,
  fieldId,
  ...rest
}) => {
  const labelFor = fieldId || get(children, 'props.id');

  const labelProps = {
    required,
    disabled,
    htmlFor: labelFor,
    className: 'field-label',
  };

  // a label is always rendered, even if it's empty
  const labelElement =
    !label || typeof label === 'string' ? (
      <Label {...labelProps}>{label}</Label>
    ) : (
      React.cloneElement(label, labelProps)
    );

  const helpTextProps = {
    error: !!error,
    className: 'field-help-text',
  };

  const helpTextElement = !helpText ? null : typeof helpText === 'string' ? (
    <HelpText {...helpTextProps}>{helpText}</HelpText>
  ) : (
    React.cloneElement(helpText, helpTextProps)
  );

  return (
    <Container columnSpan={columnSpan} className="field" {...rest}>
      <LabelContainer className="field-label-container">
        {labelElement}
        {helpCallout && (
          <Callout
            content={helpCallout}
            style={{ position: 'relative', top: '-15px' }}
            {...helpCalloutProps}
          >
            <HelpIcon name="help" />
          </Callout>
        )}
      </LabelContainer>
      <Content
        align={alignContent}
        verticalAlign={alignContentVertically}
        className="field-content"
      >
        {children}
      </Content>
      {helpTextElement}
    </Container>
  );
};

Field.propTypes = {
  /**
   * The number of columns which this field should span within its row.
   */
  columnSpan: PropTypes.number,
  /**
   * (stretch|left|right): the alignment of contents within the Field
   */
  alignContent: PropTypes.oneOf(['stretch', 'left', 'right']),
  /**
   *  (top|center|bottom): the vertical alignment of content within the Field
   */
  alignContentVertically: PropTypes.oneOf(['top', 'center', 'bottom']),
  /**
   * A string or node to render in the label position. A string will be wrapped with the Label component prop.
   * If you provide a custom node, it will receive the htmlFor prop. Please assign this prop to a <label> element.
   */
  label: PropTypes.node,
  /**
   * Indicates if the field is required by the form.
   */
  required: PropTypes.bool,
  /**
   * Disables the form label.
   */
  disabled: PropTypes.bool,
  /**
   * Contents to render inside the main field area.
   */
  children: PropTypes.node,
  /**
   * A string or node to render in the help text position. A string will be wrapped with the HelpText component prop.
   */
  helpText: PropTypes.node,
  /**
   * Whether or not this field should render in an invalid / error state
   */
  error: PropTypes.boolean,
  /**
   * A component prop to override the component used to render labels. Defaults to library Label.
   */
  Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component prop to override the component used to render the label container. Defaults to library LabelContainer.
   */
  LabelContainer: PropTypes.func,
  /**
   * A component prop to override the component used to render help text. Defaults to library HelpText.
   */
  HelpText: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component prop to override the component used to wrap field content. Defaults to Field.styles.FieldContent.
   */
  Content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component prop to override the component used to wrap the Label. Defaults to
   * Field.styles.LabelContainer
   */
  LabelContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component prop to override the component used to render the help icon. Defaults
   * to Field.styles.HelpIcon
   */
  HelpIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component prop to override the component used to render the outer container
   * around the Field elements. Defaults to Field.styles.FieldContainer
   */
  Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Content to render inside the callout.
   */
  helpCallout: PropTypes.node,
  /**
   * Additional props for callout
   */
  helpCalloutProps: PropTypes.shape({
    /**
     * Miliseconds to wait before showing the callout.
     */
    delay: PropTypes.number,
    /**
     * Where to place the element. Use a value from react-popper
     */
    placement: PropTypes.string,
    /**
     * Boundary for the callout; either a selector or a DOM element
     */
    boundary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Maximum width of the callout
     */
    maxWidth: PropTypes.number,
  }),
  /**
   * Manually specify the ID used on the field input element so that the
   * label rendered can reference it correctly. This is automatically inferred
   * if an `id` prop is present on the `children` of this component.
   */
  fieldId: PropTypes.string,
};

Field.defaultProps = {
  column: 0,
  columnSpan: 1,
  Label: DefaultLabel,
  HelpText: DefaultHelpText,
  Content: styles.FieldContent,
  LabelContainer: styles.LabelContainer,
  HelpIcon: styles.HelpIcon,
  helpText: null,
  label: null,
  required: false,
  disabled: false,
  helpCallout: null,
  helpCalloutProps: {},
  alignContent: 'stretch',
  Container: styles.FieldContainer,
};

Field.Group = FieldGroup;

Field.styles = styles;

export default Field;
