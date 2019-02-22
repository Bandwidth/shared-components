import * as React from 'react';
import Link from 'components/Link';
import * as styles from './styles';
import Skeleton from 'skeletons/Skeleton';

export interface InputProps {
  /**
   * Styles this input as being invalid
   */
  invalid: boolean;
  /**
   * Styles this input as having an error related to it
   */
  error: boolean;
  /**
   * Disables the ability to show a password
   */
  disableShowPassword: boolean;
  /**
   * Provides a reference to the input element
   */
  inputRef?: any;
  /**
   * A component that renders the internal input element
   */
  Styles?: any;
  /**
   * A component that wraps the whole element and helps control spacing
   * when reveal password is enabled
   */
  InlineContentWrapper?: any;
  /**
   * A react node that is displayed inside input element
   */
  inlineContent: React.ReactNode;
  /**
   * Lets you make this input appear to be focused (does not actually
   * change the focus state of the element)
   */
  appearFocused: boolean;
}

interface InputState {
  _type?: string;
  visited: boolean;
}

class Input extends React.PureComponent<
  React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> &
    InputProps,
  InputState
> {
  static defaultProps = {
    type: 'text',
    onBlur: () => null,
    invalid: false,
    error: false,
    disableShowPassword: false,
    Styles: styles.InputStyles,
    InlineContentWrapper: styles.InlineContentWrapper,
    inlineContent: null,
    autoComplete: true,
    appearFocused: false,
  };

  static styles = styles;

  static Skeleton = ({ height = '53px' }) => <Skeleton height={height} />;

  componentDidMount() {
    this.setState({
      _type: this.props.type,
    });
  }

  constructor(props) {
    super(props);
    this.state = { visited: false };
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ visited: true });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  getAutoComplete = () => {
    const { autoComplete } = this.props;
    if (autoComplete === 'on') return 'on';
    // Prevent browsers from completing this field like a password.
    if (this.state._type === 'password') return 'new-password';
    return 'off';
  };

  renderPasswordField = () => {
    const toggleState = type => (type === 'password' ? 'text' : 'password');
    const handleClick = evt => {
      evt.preventDefault();
      this.setState({
        _type: toggleState(this.state._type),
      });
    };

    const inlineNode = (
      <div>
        <Link href="" onClick={handleClick}>
          {this.state._type === 'password' ? 'Show' : 'Hide'}
        </Link>
      </div>
    );

    return this.renderInlineContent(inlineNode);
  };

  renderInlineContent = (node: React.ReactNode) => {
    const { InlineContentWrapper } = this.props;
    return (
      <InlineContentWrapper>
        {this.renderInputField()}
        <div>{node}</div>
      </InlineContentWrapper>
    );
  };

  renderInputField = () => {
    const {
      invalid,
      error,
      inputRef,
      Styles,
      inlineContent,
      ...rest
    } = this.props;

    const { visited, _type: type } = this.state;

    return (
      <Styles
        visited={visited}
        invalid={invalid}
        type={type}
        error={error}
        ref={inputRef}
        inlineContent={inlineContent}
        {...rest}
        onBlur={this.onBlur}
        autoComplete={this.getAutoComplete()}
      />
    );
  };

  render() {
    const { type, disableShowPassword, inlineContent } = this.props;

    if (type === 'password' && !disableShowPassword) {
      return this.renderPasswordField();
    }

    if (inlineContent) {
      return this.renderInlineContent(inlineContent);
    }

    return this.renderInputField();
  }
}

export default Input;
