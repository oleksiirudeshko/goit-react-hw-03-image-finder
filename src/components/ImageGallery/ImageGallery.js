import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images, onImgClick }) {
  return (
    <ul className='ImageGallery'>
      {images.map(({ id, webformatURL, largeImageURL, value }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          Invalue={value}
          onImgClick={onImgClick}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
export default ImageGallery;
