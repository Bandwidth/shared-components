import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'recompose';
import Link from 'components/Link';
import * as styles from './styles';

class Input extends React.PureComponent {
  static propTypes = {
    /**
     * The value of the input.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Handler for the onchange event.
     */
    onChange: PropTypes.func,
    /**
     * Handler for the onblur event.
     */
    onBlur: PropTypes.func,
    /**
     * Handler for the onfocus event.
     */
    onFocus: PropTypes.func,
    /**
     * Handler for the onkeydown event.
     */
    onKeyDown: PropTypes.func,
    /**
     * Controls whether the user can change this element.
     */
    disabled: PropTypes.bool,
    /**
     * Controls whether the element is marked as required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Controls whether the user can modify the element - typically displays differently from disabled.
     */
    readOnly: PropTypes.bool,
    /**
     * Limits the maximum length of the input.
     */
    maxLength: PropTypes.number,
    /**
     * Limits the minimum value of the input - note that this value is primarily for its semantic meaning.
     */
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Limits the maximum value of the input - note that this value is primarily for its semantic meaning.
     */
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Adds an name to the element.
     */
    name: PropTypes.string,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Sets the type of data expected for this input.
     */
    type: PropTypes.oneOf([
      'search',
      'email',
      'url',
      'tel',
      'number',
      'range',
      'date',
      'month',
      'week',
      'time',
      'datetime',
      'datetime-local',
      'color',
      'password',
      'text',
    ]),
    /**
     * Styles this input as being invalid
     */
    invalid: PropTypes.bool,
    /**
     * Styles this input as having an error related to it
     */
    error: PropTypes.bool,
    /**
     * Placeholder text to display when the input is blank
     */
    placeholder: PropTypes.string,
    /**
     * Disables the ability to show a password
     */
    disableShowPassword: PropTypes.bool,
    /**
     * Suggests to most browsers whether they should autocomplete the field
     */
    autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Provides a reference to the input element
     */
    inputRef: PropTypes.func,
    /**
     * A component that renders the internal input element
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that wraps the whole element and helps control spacing
     * when reveal password is enabled
     */
    InlineContentWrapper: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * A react node that is displayed inside input element
     */
    inlineContent: PropTypes.node,
    /**
     * Lets you make this input appear to be focused (does not actually
     * change the focus state of the element)
     */
    appearFocused: PropTypes.bool,
    /**
     * Hides the cursor from view
     */
    hideCursor: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    readOnly: false,
    id: null,
    name: null,
    type: 'text',
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
    onKeyDown: () => null,
    className: null,
    invalid: false,
    error: false,
    placeholder: '',
    disableShowPassword: false,
    Styles: styles.InputStyles,
    InlineContentWrapper: styles.InlineContentWrapper,
    inlineContent: null,
    maxLength: null,
    min: null,
    max: null,
    autoComplete: true,
    spellCheck: 'false',
    appearFocused: false,
    hideCursor: false,
  };

  static styles = styles;

  componentDidMount() {
    this.setState({
      _type: this.props.type,
    });
  }

  constructor(props) {
    super(props);
    this.state = { visited: false };
  }

  onBlur = event => {
    this.setState({ visited: true });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  getAutoComplete = () => {
    const { autocomplete, autoComplete } = this.props;
    if (
      autocomplete === true ||
      autocomplete === 'on' ||
      autoComplete === true ||
      autoComplete === 'on'
    )
      return 'on';
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

  renderInlineContent = node => {
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
      disabled,
      id,
      className,
      invalid,
      onFocus,
      onChange,
      onKeyDown,
      value,
      required,
      error,
      placeholder,
      inputRef,
      Styles,
      inlineContent,
      readOnly,
      name,
      maxLength,
      min,
      max,
      ...rest
    } = this.props;

    const { visited, _type: type } = this.state;

    return (
      <Styles
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        visited={visited}
        id={id}
        name={name}
        className={className}
        invalid={invalid}
        onChange={onChange}
        value={value}
        required={required}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        ref={inputRef}
        inlineContent={inlineContent}
        maxLength={maxLength}
        min={min}
        max={max}
        {...rest}
        type={type}
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

Input.Small = defaultProps({
  Styles: styles.InputStyles.Small,
})(Input);

export default Input;
