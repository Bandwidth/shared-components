import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { AnimationTimer } from 'animation-timer';
import { Easer } from 'functional-easing';
import Icon from '../Icon';
import Group from './AccordionGroup';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Label = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  color: ${({ theme }) => theme.accordion.labelFG};
  font-family: ${({ theme }) => theme.accordion.labelFontFamily};
  font-size: ${({ theme }) => theme.accordion.labelFontSize};
  text-transform: ${({ theme }) => theme.accordion.textTransform};
  font-weight: ${({ theme }) => theme.accordion.labelFontWeight};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const Content = styled.div`
  overflow: hidden;
`;

const ContentHolder = styled.div`
  padding: 0;
  padding-top: 0;
`;

const ModdedIcon = styled(Icon)`
  color: #666;
  margin: auto 1em auto auto;
  transform: ${({ isCollapsed }) => isCollapsed ? 'rotate(0)' : 'rotate(90deg)'};
  transition: 0.2s all ease;
  font-weight: 100;

  &:after {
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${({ theme }) => theme.accordion.iconFontSize};
  }
`;

const LabelText = styled.span`
  margin: auto;
  flex: 1;
`;

export const ContentPadding = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

/**
 * Accordion works like a controllable component. Provide the
 * isCollapsed prop to control it, or don't to let it control itself.
 */
class Accordion extends React.Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    isCollapsed: PropTypes.bool,
    onToggle: PropTypes.func,
  };

  static defaultProps = {
    isCollapsed: null,
    onToggle: () => {}, // no-op
  };

  constructor(props) {
    super(props);
    this.state = { internalIsCollapsed: true };
  }

  componentDidMount() {
    // on first mount, recalculate the natural size and setup without animation
    this.setContentCollapseState(false);
    // any time the window resizes, recalculate the natural size
    window.addEventListener('resize',
      debounce(this.setContentCollapseState.bind(this, false), 300),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // only animate if the collapsed state has changed.
    this.setContentCollapseState(prevProps.isCollapsed !== this.props.isCollapsed ||
      prevState.internalIsCollapsed !== this.state.internalIsCollapsed);
  }

  setContentCollapseState = (animate = true) => {
    const isCollapsed = this.calcIsCollapsed();
    const content = this._content;
    if (!content) {
      return;
    }
    const naturalHeight = content.scrollHeight;
    if (animate) {
      const easer = new Easer().using('cubic');
      new AnimationTimer()
        .duration(200)
        .on('tick', easer((percent) => {
          const directionalPercent = isCollapsed ? 1.0 - percent : percent;
          content.style.height = `${naturalHeight * directionalPercent}px`;
        })).play();
    } else {
      content.style.height = isCollapsed ? 0 : naturalHeight;
    }
  };

  handleToggle = () => {
    if (this.props.onToggle) {
      this.props.onToggle(this.calcIsCollapsed());
    }
    this.setState({ internalIsCollapsed: !this.state.internalIsCollapsed });
  };

  calcIsCollapsed = () => {
    const { isCollapsed } = this.props;
    const { internalIsCollapsed } = this.state;
    if (isCollapsed === null) {
      return internalIsCollapsed;
    }

    return isCollapsed;
  };

  renderContent = () => (
    <Content
      innerRef={(el) => { this._content = el; }}
      isCollapsed={this.calcIsCollapsed()}
    >
      <ContentHolder>
        {this.props.children}
      </ContentHolder>
    </Content>
    );

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

Accordion.usage = `
# Accordion

Expands and collapses when the label is clicked. Or, you can provide the \`isCollapsed\` prop to force open/closed state. You can also provide a hook to \`onToggle\`. Your \`onToggle\` function will be called with one parameter, a boolean representing whether the component is currently collapsed at the time it was clicked.

Accepts \`label\` to define what's rendered in the label.

Also exports \`ContentPadding\`, which you can use on any content contained inside the accordion to achieve consistent padding.

\`\`\`
<Accordion label="Hello">
  Some content
</Accordion>
\`\`\`
`;

Accordion.Group = Group;
export default Accordion;
