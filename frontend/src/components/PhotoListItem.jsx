import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ toggleLike, imageSource, profile, username, location, openModal, photo, likedPhotosCount, likedPhotoIDs, photoId, isModalOpen }) => {

  return (
      <li className="photo-list__item" >
        <PhotoFavButton photoId={photoId} toggleLike={toggleLike} likedPhotosCount={likedPhotosCount} likedPhotoIDs={likedPhotoIDs} />
        <img src={imageSource} className="photo-list__image" onClick={() => openModal(photo)} />
        <div className="photo-list__user-info">
          <img src={profile} className="photo-list__user-profile" />
          <p className="photo-list__user-details">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </li>
  );
};

export default PhotoListItem;