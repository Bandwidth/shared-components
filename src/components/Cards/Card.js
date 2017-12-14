import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import DefaultCardHeader from './CardHeader';
import CardSection from './CardSection';

const OuterBox = styled.div`
  height: auto;
  vertical-align: top;
  flex: 1;
`;

const InnerBox = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const AdditionalSections = styled.div`
  & > *:not(:last-child) {
    border-bottom-color: ${themeGet('colors.border.medium')};
    border-bottom-width: ${themeGet('thicknesses.normal')};
    border-bottom-style: solid;
  }
`;

class Card extends React.Component {
  static propTypes = {
    /**
     * The title text to be displayed in the card header.
     */
    title: PropTypes.string,
    /**
     * The background image to be used for the card header.
     */
    image: PropTypes.string,
    /**
     * The component to be used in order to render the card header.  A reasonable default is provided.
     */
    CardHeader: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    image: null,
    CardHeader: DefaultCardHeader,
  };

  renderCardHeader = (title, image, CardHeader) => {
    if (title || image) {
      return <CardHeader text={title} image={image} />;
    }
    return null;
  };

  render() {
    const { title, image, CardHeader, children } = this.props;
    return (
      <OuterBox>
        <InnerBox>
          {this.renderCardHeader(title, image, CardHeader)}
          <AdditionalSections>{children}</AdditionalSections>
        </InnerBox>
      </OuterBox>
    );
  }
}

Card.Section = CardSection;

export default Card;
