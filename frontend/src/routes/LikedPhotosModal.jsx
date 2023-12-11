import React from 'react';
import '../styles/LikedPhotosModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const LikedPhotosModal = ({ likedPhotoIDs, toggleLike, isModalOpen, likedPhotosCount, closeModal, openModal, photos }) => {
  const likedPhotos = photos.filter(photo => likedPhotoIDs.includes(photo.id));

  return (
    <div className="liked-photos-modal">
      <>
        <div className="liked-photos-modal__header">
          <button className="liked-photos-modal__close-button" onClick={closeModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
        </div>
        <div className="liked-photos-modal__photo-list">
          <PhotoList
            photos={likedPhotos}
            likedPhotoIDs={likedPhotoIDs}
            toggleLike={toggleLike}
            isModalOpen={isModalOpen}
            openModal={openModal}
            likedPhotosCount={likedPhotosCount}
          />
        </div>
      </>
    </div>
  )
};

export default LikedPhotosModal;