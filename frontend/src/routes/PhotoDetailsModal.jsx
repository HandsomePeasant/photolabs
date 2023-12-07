import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, handleClose, toggleLike, isModalOpen, likedPhotosCount, likedPhotoIDs, photoId }) => {
  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal" >

      <>
        <button className="photo-details-modal__close-button" onClick={handleClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div id={isModalOpen ? 'modal-style' : ''}>
          <PhotoFavButton
            photoId={photoId}
            toggleLike={toggleLike}
            likedPhotoIDs={likedPhotoIDs}
          />
        </div>
        <img src={photo.urls.full} className="photo-details-modal__image" />
        <div className="photo-details-modal__top-bar" />

        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} className="photo-details-modal__photographer-profile" />

          <section className="photo-details-modal__photographer-info">
            {photo.user.username}

            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </section>
        </div>
        <div>
          <div className="photo-details-modal__header">Similar Photos</div>
          <div className="photo-details-modal__images">
            <PhotoList photos={similarPhotos} toggleLike={toggleLike} />
          </div>
        </div>
      </>
    </div>
  )

};

export default PhotoDetailsModal;
