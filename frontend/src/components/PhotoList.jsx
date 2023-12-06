import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleLike, isLiked, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id}
          toggleLike={toggleLike}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          isLiked={isLiked}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList;