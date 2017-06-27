import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../../components/Label';
import HelpText from '../../components/HelpText';
import Callout from '../../components/Callout';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => theme.input.margin};

  &:last-child {
    margin-right: 0;
  }
`;

class FieldWrapper extends React.Component {
  static propTypes = {
    /**
     * Indicates whether the user can interact with the field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether the field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Content of the label above the field.
     */
    label: PropTypes.string,
    /**
     * Content of the help text below the field.
     */
    helpText: PropTypes.string,
    /**
     * Content of the callout displayed when the user hovers the field.
     */
    callout: PropTypes.node,
    /**
     * The field input itself.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds an id to the field wrapper container.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the field wrapper container.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
    className: null,
    type: 'text',
    helpText: null,
    callout: null,
  };

  renderChildren() {
    const { children, callout } = this.props;
    if (callout) {
      return <Callout content={callout}>{children}</Callout>;
    }

    return children;
  }

  render() {
    const { label, disabled, required, helpText, id, className } = this.props;
    return (
      <Container id={id} className={className}>
        {label ? <Label required={required} disabled={disabled}>{label}</Label> : null}
        {this.renderChildren()}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
      </Container>
    );
  }
}

FieldWrapper.usage = `
# FieldWrapper

Mainly used by other input classes. It adds the label and help text above and below its children.

\`\`\`
<FieldWrapper label="foo" helpText="bar">
  <TextBox />
</FieldWrapper>
\`\`\`
`;

export default FieldWrapper;
