import React, { useEffect } from 'react';
import { useGlobalContext } from '../components/GlobalProvider';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = () => {
  const { state, dispatch } = useGlobalContext();
  const { isModalOpen, selectedPhoto } = state;
  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  useEffect(() => {
    const photoList = document.querySelector('.photo-list');

    if (isModalOpen) {
      photoList.classList.add('modal-open');
    } else {
      photoList.classList.remove('modal-open');
    }

    return () => {
      photoList.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleLikeToggle = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: id });
  };

  return (
    <div className="photo-details-modal" >

      {selectedPhoto && (
        <>
          <button className="photo-details-modal__close-button" onClick={handleClose}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div id={isModalOpen ? 'modal-style' : ''}>
            <PhotoFavButton
              photoId={selectedPhoto.id}
              onClick={handleLikeToggle}
              isLiked={state.likedPhotoIDs.includes(selectedPhoto.id)}
            />
          </div>
          <img src={selectedPhoto.urls.full} className="photo-details-modal__image" />
          <div className="photo-details-modal__top-bar" />

          <div className="photo-details-modal__photographer-details">
            <img src={selectedPhoto.user.profile} className="photo-details-modal__photographer-profile" />

            <section className="photo-details-modal__photographer-info">
              {selectedPhoto.user.username}

              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </section>
          </div>
          {selectedPhoto.similar_photos && (
            <div>
              <div className="photo-details-modal__header">Similar Photos</div>
              <div className="photo-details-modal__images">
                <PhotoList data={similarPhotos} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )

};

export default PhotoDetailsModal;
