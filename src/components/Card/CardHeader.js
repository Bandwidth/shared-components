import React from 'react';
import PropTypes from 'prop-types';
import DefaultHeaderWrapper from './styles/HeaderWrapper';
import DefaultCardHeaderText from './styles/CardHeaderText';

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
    HeaderWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component which controls the appearance of the text in the Card Header
     */
    CardHeaderText: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    title: null,
    image: null,
    HeaderWrapper: DefaultHeaderWrapper,
    CardHeaderText: DefaultCardHeaderText,
  };

  render() {
    const { image, title, HeaderWrapper, CardHeaderText } = this.props;

    return (
      <HeaderWrapper image={image}>
        {title ? <CardHeaderText>{title}</CardHeaderText> : null}
      </HeaderWrapper>
    );
  }
}

export default CardHeader;
