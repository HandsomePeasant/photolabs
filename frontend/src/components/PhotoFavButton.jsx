import React, {useState} from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, toggleLike, isLiked}) {
  const [photoLiked, setPhotoLiked] = useState(isLiked);

  const handleClick = () => {
    toggleLike(photoId);
    setPhotoLiked(!photoLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={photoLiked} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
