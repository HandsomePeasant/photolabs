import React from 'react';
import { useGlobalContext, closeModal } from '../App';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const { state, dispatch } = useGlobalContext();
  const { selectedPhoto } = state;

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={handleClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {selectedPhoto && (
        <div className="photo-details-modal__content">
          <img src={selectedPhoto.urls.full} className="photo-details-modal__image" />
          <div className="photo-details-modal__header">{selectedPhoto.description}</div>
          <div className="photo-details-modal__photographer-details">
            <img
              src={selectedPhoto.user.profile} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
              <div className="photo-details-modal__photographer-info">
                {selectedPhoto.user.username}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default PhotoDetailsModal;
