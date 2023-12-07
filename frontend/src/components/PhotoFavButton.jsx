import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleLike, likedPhotoIDs = [] }) {
  const isLiked = likedPhotoIDs.includes(photoId);
  const handleClick = () => {
    toggleLike(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;