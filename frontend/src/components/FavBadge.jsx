import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ likedPhotosCount, openModal }) => {

  return (
    <div className='fav-badge' onClick={() => openModal(null, "likedPhotos")}>
      <FavIcon selected={likedPhotosCount > 0} displayAlert={likedPhotosCount > 0}/>
      {likedPhotosCount > 0 && (
        <div className='fav-badge__count'>
          <span>{likedPhotosCount}</span>
        </div>
      )}
    </div>
  ) 
};

export default FavBadge;