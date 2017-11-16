import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const NavigationItem = styled.div.withConfig({ displayName: 'NavigationItem' })`
  border: 0;
  padding: ${get('spacing.small')} 0 ${get('spacing.large')} 0;
  line-height: 1;
  opacity: 1;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  color: ${props =>
    props.active ? get('colors.primary.dark')(props) : 'inherit'};
  margin: 0;
  font-size: 1em;

  &::before {
    content: '';
    background: ${get('colors.primary.dark')};
    width: 104%;
    height: ${props => (props.active ? '5px' : 0)};
    display: block;
    position: absolute;
    bottom: 0;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 0.5;
    height: 5px;
  }
`;

NavigationItem.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,

  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NavigationItem.defaultProps = {
  className: null,
  id: null,
};

const darkStyles = css`
  color: ${props =>
    props.active ? get('colors.primary.default')(props) : 'inherit'};
  &::before {
    background: ${get('colors.primary.default')};
  }
`;

NavigationItem.Dark = NavigationItem.extend`
  ${darkStyles};
`;

const smallStyles = css`
  padding: ${get('spacing.large')} 0 0 0;
  margin: 0 0 10px 0;
  font-size: 0.8em;

  &::before {
    height: ${props => (props.active ? '5px' : 0)};
    top: calc(100% + 10px);
    bottom: auto;
  }
`;

NavigationItem.Small = NavigationItem.extend`
  ${smallStyles};
`;

NavigationItem.Small.Dark = NavigationItem.extend`
  ${darkStyles} ${smallStyles};
`;

NavigationItem.Dark.Small = NavigationItem.Small.Dark;

export default NavigationItem;
