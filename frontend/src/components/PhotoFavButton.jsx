import React, {useState} from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, toggleLike}) {
  const [liked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!liked);
    toggleLike(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
