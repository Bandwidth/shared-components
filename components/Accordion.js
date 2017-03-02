import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { AnimationTimer } from 'animation-timer';
import { Easer } from 'functional-easing';
import Icon from './Icon';

const Container = styled.div`
  border: ${({ theme }) => theme.accordion.border};
  overflow: hidden;
`;

const Label = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  color: ${({ theme }) => theme.accordion.labelFG};
  font-family: ${({ theme }) => theme.accordion.labelFontFamily};
  font-size: ${({ theme }) => theme.accordion.labelFontSize};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  padding-top: 0;
  overflow: hidden;
`;

const ModdedIcon = styled(Icon)`
  color: #666;
  margin: auto;
  transform: ${({ isCollapsed }) => isCollapsed ? 'rotate(0)' : 'rotate(90deg)'};
  transition: 0.2s all ease;

  &:after {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const LabelText = styled.span`
  margin: auto;
  flex: 1;
`;

const getComputedPaddingBottomPixels = (el) =>
  parseInt(window.getComputedStyle(el)['padding-bottom'].replace('px', ''));

/**
 * Accordion works like a controllable component. Provide the
 * isCollapsed prop to control it, or don't to let it control itself.
 */
export default class Accordion extends React.Component {
  static propTypes = {
    label: React.PropTypes.node.isRequired,
    children: React.PropTypes.node.isRequired,
    isCollapsed: React.PropTypes.bool,
    onToggle: React.PropTypes.func,
  };

  static defaultProps = {
    isCollapsed: null,
  };

  constructor(props) {
    super(props);
    this.state = { internalIsCollapsed: true };
  }

  componentDidMount() {
    // on first mount, recalculate the natural size and setup without animation
    this.setContentCollapseState(true, false);
    // any time the window resizes, recalculate the natural size
    window.addEventListener('resize',
      debounce(this.setContentCollapseState.bind(this, true), 300)
    );
  }

  componentDidUpdate(prevProps) {
    // only animate if the collapsed state has changed.
    this.setContentCollapseState(false, prevProps.isCollapsed !== this.props.isCollapsed);
  }

  calcIsCollapsed = () => {
    const { isCollapsed } = this.props;
    const { internalIsCollapsed } = this.state;
    if (isCollapsed === null) {
      return internalIsCollapsed;
    }

    return isCollapsed;
  }

  handleToggle = () => {
    if (this.props.onToggle) {
      this.props.onToggle(this.calcIsCollapsed());
    }
    this.setState({ internalIsCollapsed: !this.state.internalIsCollapsed });
  };

  setContentCollapseState = (recheckHeight = false, animate = true) => {
    const isCollapsed = this.calcIsCollapsed();
    const content = this._content;
    if (recheckHeight) {
      content.style.height = 'auto';
      this._contentNaturalHeight = content.offsetHeight;
      this._contentNaturalPadding = getComputedPaddingBottomPixels(content);
    }
    const naturalHeight = this._contentNaturalHeight;
    const naturalPadding = this._contentNaturalPadding;
    if (animate) {
      const easer = new Easer().using('cubic');
      const animation = new AnimationTimer()
        .duration(200)
        .on('tick', easer((percent) => {
          const directionalPercent = isCollapsed ? 1.0 - percent : percent;
          content.style.height = `${naturalHeight * directionalPercent}px`;
          content.style.paddingBottom = `${naturalPadding * directionalPercent}px`;
        })).play();
    } else {
      content.style.height = isCollapsed ? 0 : naturalHeight;
      content.style.paddingBottom = isCollapsed ? 0 : naturalPadding;
    }
  }

  renderContent = () => {
    return (
      <Content
        innerRef={(el) => { this._content = el; }}
        isCollapsed={this.calcIsCollapsed()}
        >
        {this.props.children}
      </Content>
    );
  };

  render() {
    const isCollapsed = this.calcIsCollapsed();
    return (
      <Container>
        <Label onClick={this.handleToggle}>
          <ModdedIcon isCollapsed={isCollapsed} name="forward" size={21} />
          <LabelText>{this.props.label}</LabelText>
        </Label>
        {this.renderContent()}
      </Container>
    );
  }
}
