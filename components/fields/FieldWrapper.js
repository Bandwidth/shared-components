import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';
import HelpText from './HelpText';
import Callout from './Callout';

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
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    helpText: PropTypes.string,
    callout: PropTypes.node,

    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    label: null,
    id: null,
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
    const { label, disabled, required, helpText } = this.props;
    return (
      <Container>
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
