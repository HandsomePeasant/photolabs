import React from 'react';
import { useGlobalContext } from '../App';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId}) {
  const { state, dispatch } = useGlobalContext();
  const { likedPhotoIDs } = state;

  const isLiked = likedPhotoIDs.includes(photoId);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
