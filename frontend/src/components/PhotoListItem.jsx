import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({data}) => {
  const { id, location, urls, user } = data;
  const { full: imageSource, regular } = urls;
  const { username, profile } = user;

  return (
  <div className="photo-list__item">
    <PhotoFavButton />
    <img src={imageSource} className="photo-list__image" />
    <div className="photo-list__user-info">
      <img src={profile} className="photo-list__user-profile" />
      <p className="photo-list__user-details">{username}</p> 
      <p className="photo-list__user-location">{location.city}, {location.country}</p>
    </div>
  </div>
);
};

export default PhotoListItem;