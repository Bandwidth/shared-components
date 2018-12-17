import React from 'react';
import PropTypes from 'prop-types';
import {
  PaneSectionContent,
  PaneSectionTitle,
  PaneSectionWrap,
} from './styles';

/**
 * @deprecated this layout pattern is no longer supported
 */
class PaneSection extends React.Component {
  static propTypes = {
    /**
     * Optional title for the top of the pane section.
     */
    title: PropTypes.string,
    /**
     * Pane section contents.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds an id to the section.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the section.
     */
    className: PropTypes.string,
    /**
     * A component to render the content of the pane section
     */
    Content: PropTypes.func,
    /**
     * A component to render the title of the pane section
     */
    Title: PropTypes.func,
    /**
     * A component to render the outer wrapper of the pane section
     */
    Wrap: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    id: null,
    className: null,
    Content: PaneSectionContent,
    Title: PaneSectionTitle,
    Wrap: PaneSectionWrap,
  };

  render() {
    const { title, children, id, className, Wrap, Title, Content } = this.props;
    return (
      <Wrap id={id} className={className}>
        {title ? <Title>{title}</Title> : null}
        <Content>{children}</Content>
      </Wrap>
    );
  }
}

export default PaneSection;
