import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  handleClick = e => {
    this.props.onImgClick(this.props.largeImageURL);
  };

  render() {
    return (
      <li className='ImageGalleryItem'>
        <img
          src={this.props.webformatURL}
          alt={this.props.Invalue}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  valeu: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
};
