import React from "react";
import PhotoFavButton from './PhotoFavButton';
import { useGlobalContext, openModal } from '../App';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  const { id, location, urls, user } = data;
  const { full: imageSource } = urls;
  const { username, profile } = user;
  const { state, dispatch } = useGlobalContext();
  const isLiked = state.likedPhotoIDs.includes(id);

  const handleLikeToggle = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: id });
  };

  const handlePhotoClick = () => {
    dispatch(openModal(data));
  };

  return (
      <div className="photo-list__item" >
        <PhotoFavButton photoId={id} onClick={handleLikeToggle} isLiked={isLiked} />
        <img src={imageSource} className="photo-list__image" onClick={handlePhotoClick} />
        <div className="photo-list__user-info">
          <img src={profile} className="photo-list__user-profile" />
          <p className="photo-list__user-details">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
  );
};

export default PhotoListItem;