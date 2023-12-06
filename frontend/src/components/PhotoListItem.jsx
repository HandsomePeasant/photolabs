import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ toggleLike, isLiked, imageSource, profile, username, location, openModal, likedPhotoIDs }) => {

  return (
      <li className="photo-list__item" >
        <PhotoFavButton onClick={toggleLike} isLiked={isLiked} likedPhotoIDs={likedPhotoIDs} toggleLike={toggleLike}/>
        <img src={imageSource} className="photo-list__image" onClick={openModal} />
        <div className="photo-list__user-info">
          <img src={profile} className="photo-list__user-profile" />
          <p className="photo-list__user-details">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </li>
  );
};

export default PhotoListItem;