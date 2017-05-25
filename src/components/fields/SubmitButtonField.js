import React from 'react';
import PropTypes from 'prop-types';
import ButtonField from './ButtonField';
import Loader from '../Loader';

class SubmitButtonField extends React.Component {
  static propTypes = {
    pristine: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
    children: PropTypes.node.isRequired,
    pristineContents: PropTypes.node,
  };

  static defaultProps = {
    pristine: false,
    loading: false,
    disabled: false,
    rightIcon: null,
    leftIcon: null,
    pristineContents: 'Up to Date',
  };

  renderContents = () => {
    const { pristine, loading, children, pristineContents } = this.props;

    if (pristine) {
      return <span>{pristineContents}</span>;
    }
    if (loading) {
      return <Loader size="1em" />
    }

    return children;
  }

  render() {
    const { pristine, loading, disabled, leftIcon, rightIcon } = this.props;
    return (
      <ButtonField
        disabled={pristine || loading || disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        type="submit"
      >
        {this.renderContents()}
      </ButtonField>
    )
  }
}

SubmitButtonField.usage = `
# SubmitButtonField

Shortcut for a submit button field. Use props \`pristine\`, \`loading\` and \`disabled\` to change what gets rendered inside. Pass children for the text to display when the user can submit the form, which will not be shown if \`pristine\` or \`loading\` is overriding the contents (pristine means that the form is up-to-date or untouched).

\`\`\`
<SubmitButtonField pristine={pristine} loading={loading}>Save</SubmitButtonField>
\`\`\`
`;

export default SubmitButtonField;
