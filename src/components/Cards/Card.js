import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import CardHeader from './CardHeader';

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
    title: PropTypes.string,
    image: PropTypes.any,
  };

  static defaultProps = {
    title: null,
    image: null,
  };

  renderCardHeader = (title, image) => {
    if (title || image) {
      return <CardHeader text={title} image={image} />;
    }
    return null;
  };

  render() {
    const { title, image, children, noSpacing } = this.props;
    return (
      <OuterBox>
        <InnerBox>
          {this.renderCardHeader(title, image)}
          <AdditionalSections>{children}</AdditionalSections>
        </InnerBox>
      </OuterBox>
    );
  }
}

export default Card;
