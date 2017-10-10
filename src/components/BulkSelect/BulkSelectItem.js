import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('BulkSelectItem', ({ spacing, colors }) => ({
    padding: `${spacing.small} ${spacing.medium}`,
    backgrounds: {
      default: colors.white,
      selected: colors.primary,
      hover: colors.primaryLight,
    },
    colors: {
      default: colors.black,
      selected: colors.white,
      hover: colors.black,
    },
    borderColors: {
      default: colors.borderLight,
      selected: colors.primary,
    },
    borderRadius: '3px',
    borderWidth: '1px',
    borderStyle: 'solid',
    margin: '5px 2.5px',
  }))
  .createSelector();

const Item = styled.div`
  padding: ${select('padding')};
  background: ${select('backgrounds.default')};
  color: ${select('colors.default')};
  border-color: ${select('borderColors.default')};
  border-width: ${select('borderWidth')};
  border-style: ${select('borderStyle')};
  border-radius: ${select('borderRadius')};
  cursor: pointer;
  margin: ${select('margin')};
  display: flex;

  ${({ selected }) => selected ? css`
    background: ${select('backgrounds.selected')};
    color: ${select('colors.selected')};
    border-color: ${select('borderColors.selected')};
  ` : ''}

  &:hover {
    background: ${select('backgrounds.hover')};
    color: ${select('colors.hover')};
  }

  & > span {
    margin: auto;
  }
`;

export default class BulkSelectItem extends React.Component {
  static propTypes = {
    selected: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selected: false,
  };

  render() {
    const { children, selected, onClick } = this.props;
    return (
      <Item onClick={onClick} selected={selected}><span>{children}</span></Item>
    );
  }
}
