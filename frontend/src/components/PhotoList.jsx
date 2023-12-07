import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos = [], toggleLike, openModal, likedPhotosCount, likedPhotoIDs, isModalOpen }) => {
  return (
    <ul className="photo-list">
      
      {photos.map((photo) => (
        <PhotoListItem key={photo.id}
        photo={photo}
          toggleLike={toggleLike}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          likedPhotosCount={likedPhotosCount}
          likedPhotoIDs={likedPhotoIDs}
          photoId={photo.id}
          isModalOpen={isModalOpen}
        />
      ))}
    </ul>
  );
};

export default PhotoList;