import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H3 from 'components/H/H3';
import themeGet from 'extensions/themeGet';

const OuterContainer = styled.div`
  color: ${themeGet('colors.background.default')};
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  background-image: url(${props => props.image || 'none'});
  background-size: cover;
  padding: ${themeGet('spacing.medium')};
  padding-top: ${themeGet('spacing.extraLarge')};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  flex: 1;
`;

const WhiteHeader = H3.extend`
  color: ${themeGet('colors.text.inverted')};
`;

class CardHeader extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
  };

  static defaultProps = {
    text: null,
    image: null,
  };

  render() {
    const { image, text } = this.props;

    return (
      <OuterContainer image={image}>
        {text ? <WhiteHeader>{text}</WhiteHeader> : null}
      </OuterContainer>
    );
  }
}

export default CardHeader;
