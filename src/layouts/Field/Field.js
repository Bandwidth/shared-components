import React from 'react';
import PropTypes from 'prop-types';
import DefaultLabel from 'components/Label';
import DefaultHelpText from 'components/HelpText';
import Callout from 'components/Callout';
import * as styles from './styles';
import get from 'lodash.get';
import FieldGroup from './FieldGroup';

/**
 * Field and Field.Group handle form field layout automatically, dividing form items into a grid and aligning them automatically.
 * Include a single Field.Group with any number of Field components as direct children. The number of `columns` can be specified on the
 * Field.Group, and each Field can be assigned a number of columns to take up using the `columnSpan` prop. Each Field should include
 * any contents as `children` (e.g., `<Field><Input /></Field>`). Each field can also have `label`, `helpCallout`, and `helpText` props
 * to define additional information around the component. Field.Group uses a two-column layout by default.
 *
 * If you are using Field with a library to manage form state, such as ReduxForm or Formik, it can be helpful to bind them within your code.
 */
class Field extends React.Component {
  static Group = FieldGroup;

  static propTypes = {
    /**
     * **Automatically supplied within <Fields>**
     * Do not supply this prop if you are using Field within a Fields component.
     * The column index to place this field at within its row.
     */
    column: PropTypes.number,

    /**
     * The number of columns which this field should span within its row.
     */
    columnSpan: PropTypes.number,
    /**
     * (stretch|left|right): the alignment of contents within the Field
     */
    alignContent: PropTypes.oneOf(['stretch', 'left', 'right']),
    /**
     *  (top|center|bottom): the horizon alignment of content within the Field
     */
    alignContentHorizontally: PropTypes.oneOf(['top', 'center', 'bottom']),
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
     * A component prop to override the component used to render labels. Defaults to library Label.
     */
    Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
  };

  static defaultProps = {
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
  };

  static styles = styles;

  stylesFor = gridName => {
    const { column, columnSpan, alignContentHorizontally } = this.props;

    const endColumn = column + columnSpan - 1;

    const horizontalAlignment = {
      top: 'start',
      bottom: 'end',
      center: 'auto',
    };

    return {
      gridArea: `${gridName}${column} / ${gridName}${column} / ${gridName}${endColumn} / ${gridName}${endColumn}`,
      // align-self determines how the parts vertically align if an adjacent part is taller.
      // labels should stick to the bottom if an adjacent label has two or more lines.
      // content and helpText should stick to the top if an adjacent element is taller than them.
      alignSelf: alignContentHorizontally
        ? horizontalAlignment[alignContentHorizontally]
        : gridName === 'label' ? 'end' : 'start',
    };
  };

  renderLabel = () => {
    const {
      label,
      disabled,
      required,
      Label,
      LabelContainer,
      children,
      helpCallout,
      helpCalloutProps,
      HelpIcon,
    } = this.props;

    if (!label) {
      return null;
    }

    const labelFor = get(children, 'props.id', null);

    const labelProps = {
      disabled,
      required,
      htmlFor: labelFor,
    };

    const HelpCallout = helpCallout && (
      <Callout
        style={{ position: 'relative', top: '-15px' }}
        content={helpCallout}
        {...helpCalloutProps}
      >
        <HelpIcon name="help" />
      </Callout>
    );

    const LabelComponent =
      typeof label === 'string' ? (
        <Label {...labelProps}>{label}</Label>
      ) : (
        React.cloneElement(label, labelProps)
      );

    return (
      <LabelContainer style={this.stylesFor('label')}>
        {LabelComponent}
        {HelpCallout}
      </LabelContainer>
    );
  };

  renderHelpText = () => {
    const { helpText, error, HelpText } = this.props;

    if (!helpText) {
      return null;
    }

    const helpTextProps = {
      style: this.stylesFor('helpText'),
      error,
    };

    if (typeof helpText === 'string') {
      return <HelpText {...helpTextProps}>{helpText}</HelpText>;
    }
    return React.cloneElement(helpText, helpTextProps);
  };

  render() {
    const {
      children,
      Content,
      alignContent,
      helpText,
      error,
      HelpText,
      helpCallout,
      helpCalloutProps,
      Label,
      required,
      disabled,
      label,
      column,
      columnSpan,
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        {this.renderLabel()}
        <Content
          style={this.stylesFor('content')}
          align={alignContent}
          {...rest}
        >
          {children}
        </Content>
        {this.renderHelpText()}
      </React.Fragment>
    );
  }
}

export default Field;
