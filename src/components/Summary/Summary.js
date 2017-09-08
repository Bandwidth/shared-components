import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.card.fontSize};
  margin: 0;
  padding: ${({ theme }) => `${theme.padding.small} 0`};
  background: ${({ theme }) => theme.card.bg};
  color: ${({ theme, active }) => active ? theme.card.activeFG : theme.card.fg};
  border-bottom: ${({ theme }) => theme.card.border};

  &:last-child {
    border-bottom: none;
  }
`;

const Help = styled.span`
  font-family: ${({ theme }) => theme.card.helpFontFamily};
  font-style: italic;
  font-size: ${({ theme }) => theme.card.helpFontSize};
  font-weight: ${({ theme }) => theme.card.helpFontWeight};
  color: ${({ theme }) => theme.helpText.fg};
`;

/**
 * DEPRECATED: This component is not included in the design system, and may
 * not be considered universal enough to be included in a shared library. Use at
 * your own risk.
 */
export class Summary extends React.Component {
  static propTypes = {
    /**
     * The main content of the summary.
     */
    children: PropTypes.node.isRequired,
    /**
     * Optional aside to render explaining the summary.
     */
    helpText: PropTypes.string,
    /**
     * Adds a class name to the container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the container element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    helpText: null,
    className: null,
    id: null,
  };

  render() {
    const { children, helpText, className, id } = this.props;
    return (
      <Container className={className} id={id}>
        {children}
        <Help>{helpText}</Help>
      </Container>
    );
  }
}

export default sharedComponent({ Container, Help })(Summary);
