import React from 'react';
import PropTypes from 'prop-types';
import H3 from 'components/H/H3';
import themeGet from 'extensions/themeGet';
import DefaultHeaderWrapper from './styles/HeaderWrapper';

const WhiteHeader = H3.extend`
  color: ${themeGet('colors.text.inverted')};
`;

class CardHeader extends React.Component {
  static propTypes = {
    /**
     * The text to be displayed in the header.  Optional.  Text is displayed in white font by default.
     */
    title: PropTypes.string,
    /**
     * The image to be displayed as the background of the header.  If omitted, no background image is used.
     */
    image: PropTypes.string,
    /**
     * A component which controls the styling of the CardHeader
     */
    HeaderWrapper: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    image: null,
    HeaderWrapper: DefaultHeaderWrapper,
  };

  render() {
    const { image, title, HeaderWrapper } = this.props;

    return (
      <HeaderWrapper image={image}>
        {title ? <WhiteHeader>{title}</WhiteHeader> : null}
      </HeaderWrapper>
    );
  }
}

export default CardHeader;
