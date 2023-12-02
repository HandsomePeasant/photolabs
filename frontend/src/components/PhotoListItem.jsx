import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({data}) => {
  const { id, location, imageSource, username, profile } = data;

  return (
  <div className="photo-list__item">
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
