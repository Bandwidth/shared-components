import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('NavigationItem', ({ spacing, colors }) => ({
    border: '0',
    padding: `${spacing.large} 0`,
    transition: 'all 0.2s ease',
    color: 'inherit',
    activeColor: colors.primary.default,
    effectColor: colors.primary.default,
    effectHeight: '5px',
    effectBottom: '0',
    effectTop: 'auto',
    hoverOpacity: '0.5',
    margin: '0',
    lineHeight: '1',
  }))
  .addVariant('small', ({ spacing }) => ({
    effectTop: 'calc(100% + 10px)',
    effectBottom: 'auto',
    padding: `${spacing.large} 0 0 0`,
    margin: '0 0 10px 0',
  }))
  .createSelector();

const NavigationItemImpl = theme.connect(styled.div.withConfig({ displayName: 'NavigationItem' })`
  border: ${select('border')};
  padding: ${select('padding')};
  line-height: ${select('lineHeight')};
  opacity: 1;
  transition: ${select('transition')};
  position: relative;
  cursor: pointer;
  color: ${(props) => props.active ? select('activeColor')(props) : select('color')(props)};
  margin: ${select('margin')};

  &::before {
    content: "";
    background: ${select('effectColor')};
    width: 104%;
    height: ${(props) => props.active ? select('effectHeight')(props) : 0};
    display: block;
    position: absolute;
    bottom: ${select('effectBottom')};
    top: ${select('effectTop')};
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::before {
    opacity: ${select('hoverOpacity')};
    height: ${select('effectHeight')};
  }
`, { pure: false });

export const NavigationItem = (props) => <NavigationItemImpl {...props} />;

NavigationItemImpl.propTypes = NavigationItem.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NavigationItemImpl.defaultProps = {
  className: null,
  id: null,
};

export default NavigationItemImpl;
