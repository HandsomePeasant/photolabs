import React from 'react';
import FavIcon from './FavIcon';
import { useGlobalContext } from '../App';

import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { state } = useGlobalContext();
  const { likedPhotosCount } = state;

  return (
    <div className='fav-badge'>
      <FavIcon selected={likedPhotosCount > 0} />
      {likedPhotosCount > 0 && (
        <div className='fav-badge__count'>
          <span>{likedPhotosCount}</span>
        </div>
      )}
    </div>
  ) 
};

export default FavBadge;