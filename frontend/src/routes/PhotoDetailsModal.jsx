import React from 'react';
import { useGlobalContext, closeModal } from '../App';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const { state, dispatch } = useGlobalContext();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
