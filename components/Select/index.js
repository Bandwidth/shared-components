import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import SelectItem from './SelectItem';
import Label from '../Label';

const Container = styled.div``;

const OverlayArea = styled.div`
  position: relative;
  overflow: visible;
`;

const Selected = styled.div`
  padding: ${({ theme }) => theme.selectItem.padding};
  border: ${({ theme }) => theme.selectItem.border};
  cursor: pointer;
  background: ${({ theme }) => theme.selectItem.bg};
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  border: ${({ theme }) => theme.selectItem.border};
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.color};
  background: ${({ theme }) => theme.selectItem.bg};
  z-index: 100;
`;

export default class Select extends React.Component {
  static propTypes = {
    /** Input props, expected to be passed by redux-form */
    input: React.PropTypes.shape({
      /** The currently selected value */
      value: React.PropTypes.any,
      /** Event handler for change in value */
      onChange: React.PropTypes.func,
    }),
    /** All possible values */
    options: React.PropTypes.oneOfType([React.PropTypes.array, ImmutablePropTypes.seq]),
    /** Function to render the display of a value */
    renderOption: React.PropTypes.func,
    /** Can the user select 'none' ? */
    allowNone: React.PropTypes.bool,
    /** Text to show if none is selected */
    noneText: React.PropTypes.string,
  };

  static defaultProps = {
    options: [],
    renderOption: (val) => JSON.stringify(val),
    allowNone: true,
    noneText: 'None',
  };

  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleSelectedClick = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    if (expanded) {
      // clicking away from the element will collapse it
      window.addEventListener('mousedown', this.handleCancel);
    }
  };

  handleCancel = (event) => {
    if (event.button === 0) {
      this.setState({ expanded: false });
      window.removeEventListener('mousedown', this.handleCancel);
    }
  };

  createOptionClickHandler = (option) => (event) => {
    event.stopPropagation();
    if (event.button === 0) {
      this.setState({ expanded: false });
      this.props.input.onChange(option);
      window.removeEventListener('mousedown', this.handleCancel);
    }
  };

  renderSelected = () => {
    const { input, renderOption, noneText } = this.props;
    return <Selected onClick={this.handleSelectedClick}>{renderOption(input.value) || noneText}</Selected>;
  };

  renderOptions = () => {
    const { options, renderOption, input, allowNone } = this.props;
    const { expanded } = this.state;
    if (!expanded) {
      return null;
    }

    return (
      <Dropdown>
        {
          allowNone ?
            (<SelectItem
              key={-1}
              active={!input.value}
              onMouseDownCapture={this.createOptionClickHandler(null)}
              >
                None
              </SelectItem>) : null
        }
        {options.map((opt, idx) => {
          return (
            <SelectItem
              key={idx}
              active={input.value === opt}
              onMouseDownCapture={this.createOptionClickHandler(opt)}
              >
              {renderOption(opt)}
            </SelectItem>
          );
      })}
    </Dropdown>);
  };

  render() {
    const { label } = this.props;
    const { expanded } = this.state;
    return (
      <Container>
        {label ? <Label>{label}</Label> : null}
        <OverlayArea>
          {this.renderSelected()}
          {this.renderOptions()}
        </OverlayArea>
      </Container>
    );
  }
}
